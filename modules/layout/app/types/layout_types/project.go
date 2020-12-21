package layout_types

// Описание проекта
type Project  struct{
    Id string // ай-ди элемента
    Name string // Название проекта
    Description string // Описание проекта (данного)
    Title string //  title
    Favicon string // фавиконка
    Selectors []Selector // css
    Tags []Tag // html
    Functions []Func // js
}
