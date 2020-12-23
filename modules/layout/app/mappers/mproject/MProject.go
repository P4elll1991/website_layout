package mproject

import (
	"database/sql"
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types"
)


type MProject struct{
	db *sql.DB
}

func NewMProject() *MProject {
	return &MProject{db: db.Session}
}

func (m MProject) GetProject(id string) (project *layout_types.Project, err error) {

	err = m.db.Ping()

	return
}