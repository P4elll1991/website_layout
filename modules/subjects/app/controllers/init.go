package controllers

import (
	"github.com/revel/revel"
)

func init() {

	revel.InterceptMethod((*CSubjects).Init, revel.BEFORE)
}
