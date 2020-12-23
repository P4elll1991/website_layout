package mtag

import (
	"database/sql"
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types"
)


type MTag struct{
	db *sql.DB
}

func NewMTag() *MTag {
	return &MTag{db: db.Session}
}

func (m MTag) GetTagsByProjectId(id string) (tags []layout_types.Tag, err error) {

	err = m.db.Ping()

	return
}

func (p MTag) GetTagsParentId(id string) (tags []layout_types.Tag, err error) {


	
		return
	}