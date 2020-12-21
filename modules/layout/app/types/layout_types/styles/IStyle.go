package styles


// Общий интерфейс для стилей
type IStyle interface {
    GetName() StyleType
    GetValue() interface{}
}

// тип стиля
type StyleType string 
const (
    WIDTH StyleType = "width"
    HEIGHT StyleType = "height"
    COLOR StyleType = "color"
)
