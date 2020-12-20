// Интерфес стиля
export default interface IStyle {
    id: string // id стиля
    type: StyleType // Название стиля
    value: any // Значение
    getName(): string // Получение имени стиля
    getId(): string // Получение id стиля
    getValue(): any // Получение значения стиля в виде интерпретируемого типа
    setValue(value: any): void // Установка значения
    getString(): string // Получение строки
    getForm(): any // Получение формы для редактирования
}

export enum StyleType {
    WIDTH = 'width',
    HEIGHT = 'height',
}
