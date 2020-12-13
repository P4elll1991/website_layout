const resolver = require('babel-plugin-module-resolver')
const path = require('path')

/**
 * Исправляем импорты алиасов для получения библиотек
 * не находящихся в корневой директории
 * */

/**
 * Получаем пути из tsconfig.json
 * */
const getResolverAlias = (projectDir) => {
    const tsConfigFile = path.join(projectDir, 'tsconfig.json')
    const tsConfig = require(tsConfigFile)

    const tsConfigPaths = (tsConfig.compilerOptions && tsConfig.compilerOptions.paths) || {}

    // remove the "/*" at end of tsConfig paths key and values array
    const pathAlias = Object.keys(tsConfigPaths)
        .map((tsKey) => {
            const pathArray = tsConfigPaths[tsKey]
            const key = tsKey.replace('/*', '')
            // make sure path starts with "./"
            const paths = pathArray.map((p) => `./${p.replace('/*', '')}`)
            return { key, paths }
        })
        .reduce((obj, cur) => {
            obj[cur.key] = cur.paths // eslint-disable-line no-param-reassign
            return obj
        }, {})

    return pathAlias
}

/**
 * Also add special resolving of the "src" tsconfig paths.
 * This is so "src" used within the common projects (eg within components) correctly resolves
 *
 * eg In app1 project if you import `@blah/components/Foo` which in turn imports `src/theme`
 * then for `@blah/components/Foo/Foo.tsx` existing module resolver incorrectly looks for src/theme`
 * within `app1` folder not `components`
 *
 * This now returns:`c:\git\Monorepo\components\src\theme`
 * Instead of: `c:\git\Monorepo\app1\src\theme`
 */
const fixResolvePath = (projectDir) => (sourcePath, currentFile, opts) => {
    const ret = resolver.resolvePath(sourcePath, currentFile, opts)
    if (!sourcePath.startsWith('src')) return ret // ignore non "src" dirs

    // common root folder of all apps (ie "c:\git\Monorepo")
    const basePath = path.join(projectDir, '../')

    // currentFile is of form "c:\git\Monorepo\components\src\comps\Foo\Foo.tsx"
    // extract which project this file is in, eg "components"
    const currentFileEndPath = currentFile.substring(basePath.length)
    const currentProject = currentFileEndPath.split(path.sep)[0]

    // sourcePath is the path in the import statement, eg "src/theme"
    // So return path to file in *this* project: eg "c:\git\Monorepo\components\src\theme"
    // out of the box module-resolver was previously returning the app folder eg "c:\git\Monorepo\app1\src\theme"
    const correctResolvedPath = path.join(basePath, currentProject, `./${sourcePath}`)

    return correctResolvedPath
}

const projectDir = path.resolve(__dirname)

const presets = [
    '@babel/typescript',
    [
        '@babel/env',
        {
            targets: {
                firefox: '50',
            },
            // Для корректного взаимодействия es5 и es6 классов исключаем транспиляцию классов
            exclude: ['@babel/plugin-transform-classes'],
        },
    ],
]

const plugins = [
    [
        // Create alias paths for module-resolver plugin based off tsconfig.json paths
        'module-resolver',
        {
            cwd: 'babelrc', // use the local babel.config.js in each project
            root: ['./'],
            alias: getResolverAlias(projectDir),
            resolvePath: fixResolvePath(projectDir),
        },
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
]

module.exports = {
    presets,
    plugins,
}
