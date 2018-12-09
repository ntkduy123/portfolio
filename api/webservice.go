package main

import (
	"github.com/gin-gonic/gin"
	"github.com/me/dev/api/controllers"
)

func main() {
	router := gin.Default()
	router.GET("/", controllers.HomeController)

	router.Run(":8080")
}
