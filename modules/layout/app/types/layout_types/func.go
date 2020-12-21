package layout_types
 
type Func  struct{
    Id string
    Name string // название функции
    Type ParamType // тип функции
    Body string // тело функции
    Params []ParamType // параметры передаваемые функции
    Used []Func // другие используемые функции
}

// Тип параметров
type ParamType string
const (
    STRING ParamType = "string" // строка
    VOID ParamType = "void" // не возвращает
    NUMBER ParamType = "number" // число
    ANY ParamType = "any" // любой
)
