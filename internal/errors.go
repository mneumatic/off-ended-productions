package internal

import (
	"net/http"
	"slices"
)

func HttpErrors(w http.ResponseWriter, r *http.Request, method string) bool {
	if !slices.Contains(app.URLPaths, r.URL.Path) {
		RenderTemplate(w, r, "error.gohtml", &Template{
			Title:      "Page Not Found | Off Ended",
			Production: app.Production,
		})
		w.WriteHeader(404)
		return false
	}
	if r.Method != method {
		RenderTemplate(w, r, "error.gohtml", &Template{
			Title:      "Method Not Allowed | Off Ended",
			Production: app.Production,
		})
		w.WriteHeader(405)
		return false
	}
	return true
}
