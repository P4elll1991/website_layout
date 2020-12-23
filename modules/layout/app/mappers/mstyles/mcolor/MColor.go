package mcolor

import "website_layout/modules/layout/app/types/layout_types/styles"

type MColor struct {

}

func NewMColor()*MColor{
	return new(MColor)
}

func (m *MColor) GetStylesById(id string) (sts styles.IStyle, err error){
	return
}
