package mselector

import (
	"database/sql"
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types"
)


type MSelector struct{
	db *sql.DB
}

func NewMSelector() *MSelector {
	return &MSelector{db: db.Session}
}

func (m MSelector) GetSelectorsByProjectId(id string) (selectors []layout_types.Selector, err error) {

	err = m.db.Ping()

	return
}

func (p MSelector) GetSelectorsByParentId(id string) (selectors []layout_types.Selector, err error) {


	
		return
	}

	func (p MSelector) GetSelectorsByTagId(id string) (selectors []layout_types.Selector, err error) {


	
		return
	}