package providers

import (
	"fmt"
	"website_layout/modules/layout/app/mappers/mattr"
	"website_layout/modules/layout/app/types/layout_types"
)


type AttrProvider struct{
	mapper *mattr.MAttr
}

func NewAttrProvider() *AttrProvider {
	return &AttrProvider{
		mapper: mattr.NewMAttr(),
	}
}

func (p AttrProvider) GetAttrByTagId(id string) (attrs []layout_types.Attr, err error) {
	attrs, err = p.mapper.GetAttrByTagId(id)
	if err != nil {
		err = fmt.Errorf("AttrProvider.GetAttrByTagId: %s", err)
		return
	}
	return
}