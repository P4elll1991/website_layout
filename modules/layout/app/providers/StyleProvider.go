package providers

import (
	"fmt"
	"website_layout/modules/layout/app/mappers/mstyles"
	"website_layout/modules/layout/app/mappers/mstyles/mcolor"
	"website_layout/modules/layout/app/mappers/mstyles/mheight"
	"website_layout/modules/layout/app/mappers/mstyles/mwidth"
	"website_layout/modules/layout/app/types/layout_types/styles"
)



type StyleProvider struct{
	baseMapper *mstyles.BaseStyleMapper
}

func NewStyleProvider() *StyleProvider {
	return &StyleProvider{
		baseMapper:mstyles.NewBaseStyleMapper(),
	}
}

func (p StyleProvider) GetStylesByTagId(id string) (stls []styles.IStyle, err error) {
	var styleList []styles.BaseStyle

	styleList, err = p.baseMapper.GetStyleListByTagId(id)
	if err != nil {
		err = fmt.Errorf("StyleProvider.GetStylesByTagId: %s", err)
		return
	}

	for i:=range styleList {
		var mapper mstyles.IMStyles
		mapper, err = p.mapperFuctory(styleList[i].Type)
		if err != nil {
			err = fmt.Errorf("StyleProvider.GetStylesByTagId: %s", err)
			return
		}

		var style styles.IStyle
		style, err = mapper.GetStylesById(styleList[i].Id)
		if err != nil {
			err = fmt.Errorf("StyleProvider.GetStylesByTagId: %s", err)
			return
		}

		stls = append(stls, style)
		
	}
	return
}


func (p StyleProvider) GetStylesBySelectorId(id string) (stls []styles.IStyle, err error) {
	var styleList []styles.BaseStyle

	styleList, err = p.baseMapper.GetStyleListBySelectorId(id)
	if err != nil {
		err = fmt.Errorf("StyleProvider.GetStylesByTagId: %s", err)
		return
	}

	for i:=range styleList {
		var mapper mstyles.IMStyles
		mapper, err = p.mapperFuctory(styleList[i].Type)
		if err != nil {
			err = fmt.Errorf("StyleProvider.GetStylesByTagId: %s", err)
			return
		}

		var style styles.IStyle
		style, err = mapper.GetStylesById(styleList[i].Id)
		if err != nil {
			err = fmt.Errorf("StyleProvider.GetStylesByTagId: %s", err)
			return
		}

		stls = append(stls, style)
	}
	return
}

func (p StyleProvider) mapperFuctory(style_type styles.StyleType) (mapper mstyles.IMStyles, err error){
	switch style_type {
	case styles.WIDTH:
		mapper = mwidth.NewMWidth()
		return 
	case styles.HEIGHT:
		mapper = mheight.NewMHeight()
		return
	case styles.COLOR:
		mapper = mcolor.NewMColor()
		return
	default:
		err = fmt.Errorf("StyleProvider.mapperFuctory: Не найден подходящий маппер")
	}
	return
}