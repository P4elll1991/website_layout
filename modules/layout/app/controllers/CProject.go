// Контроллер для получения запросов от Прокси в случае отправки файла на FTP
// на вход поступает UUID и признак успешности передачи
package controllers

import (
	"website_layout/modules/layout/app/providers"

	"github.com/revel/revel"
)

type CProject struct {
	*revel.Controller
	projectProvider *providers.ProjectProvider
}

func (c *CProject) Init() (result revel.Result) {
	c.projectProvider = providers.NewProjectProvider()
	return
}

func (c CProject) GetProject() revel.Result {

	// чтение ID соответсвующего проекта из роута
	id := c.Params.Route.Get("id")

	project, err := c.projectProvider.GetProject(id)
	if err != nil {
		revel.AppLog.Errorf("Ошибка получения проекта: %s", err.Error())
		return c.RenderJSON(err)
	}
	return c.RenderJSON(project)

}
