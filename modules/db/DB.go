package db

import (
	"database/sql"
	"errors"

	_ "github.com/lib/pq"

	"github.com/revel/revel"
)


var Session *sql.DB

// Создание модели
func New() (err error) {

	//Создание подключения к БД, если его нет
	if Session == nil {
		driver := revel.Config.StringDefault("db.driver", "")
		if driver == "" {
			err = errors.New("в настройках не указан драйвер подключения к БД")
			return
		}
		spec := revel.Config.StringDefault("db.spec", "")
		if spec == "" {
			err = errors.New("в настройках не указаны параметры подключения к БД")
			return
		}

		if Session, err = sql.Open(driver, spec); err != nil {
			err = errors.New("ошибка подключения к БД: " + err.Error())
			return
		}
	}

	return
}