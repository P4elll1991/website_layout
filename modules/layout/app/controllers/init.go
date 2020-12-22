package controllers

import (
	"github.com/revel/revel"
)

func init() {
	revel.InterceptMethod((*CProject).Init, revel.BEFORE)

}


