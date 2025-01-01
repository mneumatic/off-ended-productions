package internal

import (
	"net/http"
)

var Repo *Repository

// Repository is the repository type
type Repository struct {
	App *AppConfig
}

// NewRepo creates a new repository
func NewRepo(a *AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// NewHandlers, sets the new respository for the handlers.
func NewHandlers(r *Repository) {
	Repo = r
}

func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "index.gohtml", &Template{
			Title: "Off Ended Productions",
		})
	}
}

func (m *Repository) Community(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "community.gohtml", &Template{
			Title: "Community | Off Ended",
		})
	}
}

func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "about.gohtml", &Template{
			Title: "About | Off Ended",
		})
	}
}
