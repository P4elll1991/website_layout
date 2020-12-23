package mfunction

import (
	"database/sql"
	"website_layout/modules/db"
	"website_layout/modules/layout/app/types/layout_types"
)


type MFunc struct{
	db *sql.DB
}

func NewMFunc() *MFunc {
	return &MFunc{db: db.Session}
}

func (m MFunc) GetFuncByProjectId(id string) (funcs []layout_types.Func, err error) {

	err = m.db.Ping()

	return
}

func (p MFunc) GetFuncParentId(id string) (funcs []layout_types.Func, err error) {


	
		return
	}

	func (p MFunc) GetFuncByEventId(id string) (fun layout_types.Func, err error) {


	
		return
	}