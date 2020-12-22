package providers

import (
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types"
)


type ProjectProvider struct{}

func NewProjectProvider() *ProjectProvider {
	return &ProjectProvider{}
}

func (c ProjectProvider) GetProject(id string) (project *layout_types.Project, err error) {

	err = db.Session.Ping()

	return
}