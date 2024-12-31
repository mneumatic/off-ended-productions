package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

func main() {
	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = "8080"
	}

	// Format port string
	addr := fmt.Sprintf("localhost:%s", port)

	srv := &http.Server{
		Addr: addr,
		//Handler:      routes(&app),
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  15 * time.Second,
	}

	log.Println("main: running server on port", port)
	if err := srv.ListenAndServe(); err != nil {
		log.Fatalf("main: couldn't start server: %v\n", err)
	}
}
