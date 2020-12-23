package mevents

import (
	"database/sql"
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types"
)


type MEvent struct{
	db *sql.DB
}

func NewMEvent() *MEvent {
	return &MEvent{db: db.Session}
}

func (m MEvent) GetEventByTagId(id string) (tags []layout_types.EventTag, err error) {

	err = m.db.Ping()

	return
}

func (p MEvent) GetFuncParentId(id string) (tags []layout_types.Func, err error) {


	
		return
	}