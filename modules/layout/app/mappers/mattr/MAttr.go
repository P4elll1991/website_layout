package mattr

import (
	"database/sql"
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types"
)


type MAttr struct{
	db *sql.DB
}

func NewMAttr() *MAttr {
	return &MAttr{db: db.Session}
}

func (m MAttr) GetAttrByTagId(id string) (attrs []layout_types.Attr, err error) {

	err = m.db.Ping()

	return
}

