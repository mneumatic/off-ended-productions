package handlers

import (
	"net/http"
	"off-ended-productions/internal/configs"
	"off-ended-productions/internal/data"
	"off-ended-productions/internal/errors"
	"off-ended-productions/internal/models"
	"off-ended-productions/internal/render"
)

var Repo *Repository

// Repository is the repository type
type Repository struct {
	App *configs.AppConfig
}

// NewRepo creates a new repository
func NewRepo(a *configs.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// NewHandlers, sets the new respository for the handlers.
func NewHandlers(r *Repository) {
	Repo = r
}

func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "index.gohtml", &models.Template{
			Title:      "Off Ended Productions",
			Categories: data.CategoryData(),
		})
	}
}

func (m *Repository) Podcast(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "podcast.gohtml", &models.Template{
			Title: "Podcast | Off Ended Productions",
		})
	}
}

func (m *Repository) TwoJzMusic(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "twojz-music.gohtml", &models.Template{
			Title: "2Jz Music | Off Ended Productions",
			Music: data.MusicData(),
		})
	}
}

func (m *Repository) PlatinumSignatures(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "platinum-signatures.gohtml", &models.Template{
			Title: "Platinum Signatures | Off Ended Productions",
		})
	}
}

func (m *Repository) MNEUMATICDesigns(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "mneumatic-designs.gohtml", &models.Template{
			Title: "MNEUMATIC Designs | Off Ended Productions",
		})
	}
}

func (m *Repository) Gaming(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "gaming.gohtml", &models.Template{
			Title: "Gaming | Off Ended Productions",
		})
	}
}

func (m *Repository) Community(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "community.gohtml", &models.Template{
			Title: "Community | Off Ended Productions",
		})
	}
}

func (m *Repository) Events(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "events.gohtml", &models.Template{
			Title:  "Events | Off Ended Productions",
			Events: data.EventsData(),
		})
	}
}

func (m *Repository) Businesses(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "businesses.gohtml", &models.Template{
			Title:      "Events | Off Ended Productions",
			Businesses: data.BusinessData(),
		})
	}
}

func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	ok := errors.HttpErrors(w, r, "GET")
	if ok {
		render.RenderTemplate(w, r, "about.gohtml", &models.Template{
			Title:      "About | Off Ended Productions",
			Categories: data.CategoryData(),
		})
	}
}
