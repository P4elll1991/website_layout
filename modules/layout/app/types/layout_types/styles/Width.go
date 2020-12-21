package styles


type Width  struct {
    Value string
    Id string
}

func (s *Width) GetName() StyleType {
    return WIDTH
}

func (s *Width) GetValue()  interface{} {
    return s.Value
}
