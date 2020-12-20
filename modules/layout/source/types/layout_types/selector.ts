import IStyle from './styles/IStyle'
// селекторы
export class Selector {
    id: string
    name: string // значение названия селетора
    type: SelectorType // тип селетора, например класс
    styles: IStyle[] // тело селектора
    data: Selector[] // дочерние селекотры
}

// Тип селектора
export enum SelectorType {
    CLASS = 'class', // класс
    OTHER = 'other', // остальные
}
