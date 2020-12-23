package providers

import (
	"fmt"
	"website_layout/modules/layout/app/mappers/mproject"
	"website_layout/modules/layout/app/types/layout_types"
)


type ProjectProvider struct{
	projectMapper *mproject.MProject
	tagProvider *TagProvider
	selectorProvider *SelectorProvider
	functionProvider * FunctionProvider
}

func NewProjectProvider() *ProjectProvider {
	return &ProjectProvider{
		projectMapper: mproject.NewMProject(),
		tagProvider: NewTagProvider(),
		selectorProvider:NewSelectorsProvider(),
		functionProvider: NewFunctionProvider(),
	}
}

func (p ProjectProvider) GetProject(id string) (project *layout_types.Project, err error) {

	project, err = p.projectMapper.GetProject(id)
	if err != nil {
		err = fmt.Errorf("ProjectProvider.GetProject: %s", err)
		return
	}

	project.Tags, err = p.tagProvider.GetTagsByProjectId(id)
	if err != nil {
		err = fmt.Errorf("ProjectProvider.GetProject: %s", err)
		return
	}

	project.Selectors, err = p.selectorProvider.GetSelectorsByProjectId(id)
	if err != nil {
		err = fmt.Errorf("ProjectProvider.GetProject: %s", err)
		return
	}

	project.Functions, err = p.functionProvider.GetFuncsByProjectId(id)
	if err != nil {
		err = fmt.Errorf("ProjectProvider.GetProject: %s", err)
		return
	}

	return
}