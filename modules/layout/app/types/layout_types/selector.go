package layout_types

import (
    "website_layout/modules/layout/app/types/layout_types/styles"
)

// селекторы
type Selector struct {
    Id string
    Name string // значение названия селетора
    Type SelectorType // тип селетора, например класс
    Styles []styles.IStyle // тело селектора
    Data []Selector // дочерние селекотры
}

// Тип селектора
type SelectorType string

const (
    CLASS SelectorType = "class" // класс
    OTHER SelectorType = "other" // остальные
)
