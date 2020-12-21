package styles


type Height  struct {
    Value string
    Id string
}

func (s *Height) GetName() StyleType {
    return HEIGHT
}

func (s *Height) GetValue() interface{} {
    return s.Value
}
