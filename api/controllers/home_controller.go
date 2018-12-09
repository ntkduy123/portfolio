package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/me/dev/api/database"
	"github.com/me/dev/api/models/dto"
)

func HomeController(c *gin.Context) {

	datasource, _ := database.GetDataSource()

	var result []dto.Test

	query := datasource.Table("test").Select("*")
	query.Scan(&result)

	fmt.Println(result)
	c.JSON(http.StatusOK, result)
}
