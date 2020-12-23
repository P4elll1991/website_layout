package mheight

import "website_layout/modules/layout/app/types/layout_types/styles"

type MHeight struct {

}

func NewMHeight()*MHeight{
	return new(MHeight)
}

func (m *MHeight) GetStylesById(id string) (sts styles.IStyle, err error){
	return
}
