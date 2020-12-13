import header from '@modules/header/header'
import EditorView from './editor/editor'
import ResultView from './result/result'
import TreeBlocksView from './tree_blocks/tree_blocks'

export default function LayoutConfig() {
    return {
        rows: [
            header('Верстка сайта', false),
            {
                view: 'accordion',
                multi: true,
                cols: [
                    { header: 'Редактор', width: 300, body: EditorView },
                    { view: 'resizer' },
                    {
                        body: ResultView,
                    },
                    { view: 'resizer' },
                    {
                        header: 'Дерево блоков',
                        width: 300,
                        body: TreeBlocksView,
                    },
                ],
            },
        ],
    }
}
