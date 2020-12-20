import { Selector } from './selector'
import { Tag } from './tag'
import { Func } from './func'

// Описание проекта
export class Project {
    id: string // ай-ди элемента
    name: string // Название проекта
    description: string // Описание проекта (данного)
    title: string //  title
    favicon: string // фавиконка
    selectors: Selector[] // css
    tags: Tag[] // html
    functions: Func[] // js
}
