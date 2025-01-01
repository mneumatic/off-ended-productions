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

func (m *Repository) Podcast(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "podcast.gohtml", &Template{
			Title:  "Podcast | Off Ended Productions",
			Videos: VideoData(),
			Audio:  AudioData(),
		})
	}
}

func (m *Repository) TwoJzMusic(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "twojz-music.gohtml", &Template{
			Title: "2Jz Music | Off Ended Productions",
		})
	}
}

func (m *Repository) PlatinumSignatures(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "platinum-signatures.gohtml", &Template{
			Title: "Platinum Signatures | Off Ended Productions",
		})
	}
}

func (m *Repository) Community(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "community.gohtml", &Template{
			Title: "Community | Off Ended Productions",
		})
	}
}

func (m *Repository) Events(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "events.gohtml", &Template{
			Title:  "Events | Off Ended Productions",
			Events: EventsData(),
		})
	}
}

func (m *Repository) Businesses(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "businesses.gohtml", &Template{
			Title:      "Events | Off Ended Productions",
			Businesses: BusinessData(),
		})
	}
}

func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	ok := HttpErrors(w, r, "GET")
	if ok {
		RenderTemplate(w, r, "about.gohtml", &Template{
			Title: "About | Off Ended Productions",
		})
	}
}
