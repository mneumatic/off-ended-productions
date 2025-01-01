package main

import (
	"net/http"
	"off-ended-productions/internal"
)

func routes(app *internal.AppConfig) http.Handler {
	mux := http.NewServeMux()

	app.URLPaths = []string{
		"/",
		"/music",
		"/community",
		"/privacy-policy",
		"/terms-of-service",
	}

	mux.HandleFunc("GET /", internal.Repo.Home)
	//mux.HandleFunc("GET /music", internal.Repo.Music)
	mux.HandleFunc("GET /community", internal.Repo.Community)
	mux.HandleFunc("GET /about", internal.Repo.About)
	//mux.HandleFunc("GET /privacy-policy", internal.Repo.Privacy)
	//mux.HandleFunc("GET /terms-of-service", internal.Repo.TOS)

	fileServer := http.FileServer(http.Dir("./public"))
	mux.Handle("GET /public/", http.StripPrefix("/public", fileServer))

	return mux
}
