package providers

import (
	"fmt"
	"website_layout/modules/layout/app/mappers/mtag"
	"website_layout/modules/layout/app/types/layout_types"
)


type TagProvider struct{
	mapperTag *mtag.MTag
	selectorProvider *SelectorProvider
	attrProvider *AttrProvider
	eventProvider *EventProvider
	styleProvider *StyleProvider
}

func NewTagProvider() *TagProvider {
	return &TagProvider{
		mapperTag: mtag.NewMTag(),
		selectorProvider: NewSelectorsProvider(),
		attrProvider : NewAttrProvider(),
		eventProvider: NewEventProvider(),
		styleProvider: NewStyleProvider(),
	}
}

func (p TagProvider) GetTagsByProjectId(id string) (tags []layout_types.Tag, err error) {

tags, err = p.mapperTag.GetTagsByProjectId(id)
if err != nil {
	err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
	return
}

for i := range tags {

	tags[i].Classes, err = p.selectorProvider.GetSelectorsByTagId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}

	tags[i].Attr, err = p.attrProvider.GetAttrByTagId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}

	tags[i].Events, err = p.eventProvider.GetEventByTagId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}

	tags[i].Styles, err = p.styleProvider.GetStylesByTagId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}

	tags[i].Data, err = p.GetTagsParentId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}
} 
	return
}

func (p TagProvider) GetTagsParentId(id string) (tags []layout_types.Tag, err error) {

	tags, err = p.mapperTag.GetTagsParentId(id)
	if err != nil {
	err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
	return
}

for i := range tags {
	tags[i].Classes, err = p.selectorProvider.GetSelectorsByTagId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}

	tags[i].Attr, err = p.attrProvider.GetAttrByTagId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}

	tags[i].Events, err = p.eventProvider.GetEventByTagId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}

	tags[i].Styles, err = p.styleProvider.GetStylesByTagId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}

	tags[i].Data, err = p.GetTagsParentId(tags[i].Id)
	if err != nil {
		err = fmt.Errorf("TagProvider.GetTagsByProjectId: %s", err)
		return
	}
} 
	
		return
	}