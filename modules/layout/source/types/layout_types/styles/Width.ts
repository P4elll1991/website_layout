import IStyle, { StyleType } from './IStyle'

export default class Width implements IStyle {
    public value: number
    public id: string
    public type: StyleType

    constructor(value: number) {
        this.value = value
    }

    // Получение имени стиля
    public getName(): string {
        return 'width'
    }

    // Получение id стиля
    public getId(): string {
        return this.id
    }

    // Получение значения стиля в виде интерпретируемого типа
    public getValue(): any {
        return this.value
    }

    // Установка значения
    public setValue(value: any): void {
        this.value = value
    }

    // Получение строки
    public getString(): string {
        return `width : ${this.value}`
    }

    // Получение формы для редактирования
    public getForm(): any {
        return { view: 'counter', name: 'width', label: 'width', step: 1, value: this.value }
    }
}
