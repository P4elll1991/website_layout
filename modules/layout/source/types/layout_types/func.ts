export class Func {
    id: string
    name: string // название функции
    type: ParamType // тип функции
    body: string // тело функции
    params: ParamType[] // параметры передаваемые функции
    used: Func[] // другие используемые функции
}

// Тип параметров
export enum ParamType {
    STRING = 'string', // строка
    VOID = 'void', // не возвращает
    NUMBER = 'number', // число
    ANY = 'any', // любой
}
