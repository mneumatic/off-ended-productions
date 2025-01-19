package main

import (
	"net/http"
	"off-ended-productions/internal/configs"
	"off-ended-productions/internal/handlers"
)

func routes(app *configs.AppConfig) http.Handler {
	mux := http.NewServeMux()

	//app.URLPaths = []string{
	//	"/",
	//	"/podcast",
	//	"/twojz-music",
	//	"/platinum-signatures",
	//	"/community",
	//	"/community/events",
	//	"/community/businesses",
	//	"/about",
	//}

	mux.HandleFunc("GET /", handlers.Repo.Home)
	mux.HandleFunc("GET /podcast", handlers.Repo.Podcast)
	mux.HandleFunc("GET /twojz-music", handlers.Repo.TwoJzMusic)
	mux.HandleFunc("GET /platinum-signatures", handlers.Repo.PlatinumSignatures)
	mux.HandleFunc("GET /mneumatic-designs", handlers.Repo.MNEUMATICDesigns)
	mux.HandleFunc("GET /gaming", handlers.Repo.Gaming)
	mux.HandleFunc("GET /community", handlers.Repo.Community)
	mux.HandleFunc("GET /community/events", handlers.Repo.Events)
	mux.HandleFunc("GET /community/businesses", handlers.Repo.Businesses)
	mux.HandleFunc("GET /about", handlers.Repo.About)

	fileServer := http.FileServer(http.Dir("./public"))
	mux.Handle("GET /public/", http.StripPrefix("/public", fileServer))

	return mux
}
