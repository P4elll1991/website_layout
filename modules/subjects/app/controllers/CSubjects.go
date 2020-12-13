package controllers

import (
	"fmt"

	"github.com/revel/revel"
)

type CSubjects struct {
	*revel.Controller
}

func (c *CSubjects) Index() (result revel.Result) {
	fmt.Println("WORK")
	return
}

func (c *CSubjects) Init() (result revel.Result) {

	fmt.Println("WORK")

	return
}
