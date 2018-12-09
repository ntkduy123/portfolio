package database

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var dataSource *gorm.DB

func init() {
	db, err := CreateDatabase()

	if err != nil {
		fmt.Println(err)
	}

	dataSource = db
}

func CreateDatabase() (*gorm.DB, error) {

	username := "root"
	password := "123456"
	dbName := "dev"
	adapter := "mysql"

	url := fmt.Sprintf(
		"%s:%s@/%s?charset=utf8&parseTime=True&loc=Local",
		username,
		password,
		dbName,
	)

	db, err := gorm.Open(adapter, url)
	return db, err
}

func GetDataSource() (*gorm.DB, error) {
	return dataSource, nil
}
