package providers

import (
	"fmt"
	"website_layout/modules/layout/app/mappers/mselector"
	"website_layout/modules/layout/app/types/layout_types"
)


type SelectorProvider struct{
	mapper_selector *mselector.MSelector
	styleProvider *StyleProvider
}

func NewSelectorsProvider() *SelectorProvider {
	return &SelectorProvider{
		mapper_selector: mselector.NewMSelector(),
		styleProvider: NewStyleProvider(),
	}
}

func (p SelectorProvider) GetSelectorsByProjectId(id string) (selectors []layout_types.Selector, err error) {

	selectors, err = p.mapper_selector.GetSelectorsByProjectId(id)
	if err != nil {
		err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
		return
	}

	for i:= range selectors {
		selectors[i].Styles, err = p.styleProvider.GetStylesBySelectorId(selectors[i].Id)
		if err != nil {
			err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
			return
		}
		selectors[i].Data, err = p.GetSelectorsByParentId(selectors[i].Id)
		if err != nil {
			err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
			return
		}
	}

	return
}

func (p SelectorProvider) GetSelectorsByParentId(id string) (selectors []layout_types.Selector, err error) {
	selectors, err = p.mapper_selector.GetSelectorsByParentId(id)
	if err != nil {
		err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
		return
	}

	for i:= range selectors {
		selectors[i].Styles, err = p.styleProvider.GetStylesBySelectorId(selectors[i].Id)
		if err != nil {
			err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
			return
		}
		selectors[i].Data, err = p.GetSelectorsByParentId(selectors[i].Id)
		if err != nil {
			err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
			return
		}
	}
	return
}

func (p SelectorProvider) GetSelectorsByTagId(id string) (selectors []layout_types.Selector, err error) {

	selectors, err = p.mapper_selector.GetSelectorsByTagId(id)
	if err != nil {
		err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
		return
	}

	for i:= range selectors {
		selectors[i].Styles, err = p.styleProvider.GetStylesBySelectorId(selectors[i].Id)
		if err != nil {
			err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
			return
		}
		selectors[i].Data, err = p.GetSelectorsByParentId(selectors[i].Id)
		if err != nil {
			err = fmt.Errorf("SelectorProvider.GetSelectorsByProjectId: %s", err)
			return
		}
	}

	return

}