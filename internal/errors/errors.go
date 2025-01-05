package errors

import (
	"net/http"
	"off-ended-productions/internal/configs"
	"off-ended-productions/internal/models"
	"off-ended-productions/internal/render"
	"slices"
)

var app configs.AppConfig

var urls = []string{
	"/",
	"/podcast",
	"/twojz-music",
	"/platinum-signatures",
	"/mneumatic-designs",
	"/gaming",
	"/community",
	"/community/events",
	"/community/businesses",
	"/about",
}

func HttpErrors(w http.ResponseWriter, r *http.Request, method string) bool {
	if !slices.Contains(urls, r.URL.Path) {
		render.RenderTemplate(w, r, "error.gohtml", &models.Template{
			Title:      "Page Not Found | Off Ended",
			Production: app.Production,
		})
		w.WriteHeader(404)
		return false
	}
	if r.Method != method {
		render.RenderTemplate(w, r, "error.gohtml", &models.Template{
			Title:      "Method Not Allowed | Off Ended",
			Production: app.Production,
		})
		w.WriteHeader(405)
		return false
	}
	return true
}
