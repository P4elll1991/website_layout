package styles


type Color  struct {
    Value string
    Id string
}

func (s *Color) GetName() StyleType {
    return COLOR
}

func (s *Color) GetValue() interface{} {
    return s.Value
}
