package mparams

import (
	"database/sql"
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types"
)


type MParam struct{
	db *sql.DB
}

func NewMParam() *MParam {
	return &MParam{db: db.Session}
}

func (m MParam) GetParamsByFuncId(id string) (params []layout_types.ParamType, err error) {

	err = m.db.Ping()

	return
}

func (m MParam) GetParamsByEventId(id string) (params []interface{}, err error) {

	err = m.db.Ping()

	return
}
