import IStyle from './IStyle'

export default class Color implements IStyle {
    private value: string
    private id: string

    constructor(value: string) {
        this.value = value
    }

    // Получение имени стиля
    public getName(): string {
        return 'color'
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
        return `color : ${this.value}`
    }

    // Получение формы для редактирования
    public getForm(): any {
        return {
            view: 'colorpicker',
            label: 'color',
            name: 'color',
            value: this.value,
        }
    }
}
