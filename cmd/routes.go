package main

import (
	"net/http"
	"off-ended-productions/internal"
)

func routes(app *internal.AppConfig) http.Handler {
	mux := http.NewServeMux()

	app.URLPaths = []string{
		"/",
		"/podcast",
		"/twojz-music",
		"/platinum-signatures",
		"/community",
		"/community/events",
		"/community/businesses",
		"/about",
	}

	mux.HandleFunc("GET /", internal.Repo.Home)
	mux.HandleFunc("GET /podcast", internal.Repo.Podcast)
	mux.HandleFunc("GET /twojz-music", internal.Repo.TwoJzMusic)
	mux.HandleFunc("GET /platinum-signatures", internal.Repo.PlatinumSignatures)
	mux.HandleFunc("GET /community", internal.Repo.Community)
	mux.HandleFunc("GET /community/events", internal.Repo.Events)
	mux.HandleFunc("GET /community/businesses", internal.Repo.Businesses)
	mux.HandleFunc("GET /about", internal.Repo.About)

	fileServer := http.FileServer(http.Dir("./public"))
	mux.Handle("GET /public/", http.StripPrefix("/public", fileServer))

	return mux
}
