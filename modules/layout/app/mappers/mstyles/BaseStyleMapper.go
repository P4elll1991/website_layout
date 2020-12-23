package mstyles

import (
	"database/sql"
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types/styles"
)

type BaseStyleMapper struct {
	db *sql.DB
}

func NewBaseStyleMapper() *BaseStyleMapper {
	return &BaseStyleMapper{db: db.Session}
}

func (m BaseStyleMapper) GetStyleListByTagId(id string) (stls []styles.BaseStyle, err error) {

	err = m.db.Ping()

	return
}

func (m BaseStyleMapper) GetStyleListBySelectorId(id string) (stls []styles.BaseStyle, err error) {

	err = m.db.Ping()

	return
}
