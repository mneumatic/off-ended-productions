package internal

import (
	"net/http"
)

var Repo *Repository

// Repository is the respository type
type Repository struct {
	App *AppConfig
}

// NewRepo creates a new respository
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

//func (m *Repository) Music(w http.ResponseWriter, r *http.Request) {
//  ok := HttpErrors(w, r, "GET")
//  if ok {
//    RenderTemplate(w, r, "music.gohtml", &Template{
//      Title: "2Jz Music | Off Ended",
//    })
//  }
//}
//
//func (m *Repository) Community(w http.ResponseWriter, r *http.Request) {
//  ok := HttpErrors(w, r, "GET")
//  if ok {
//    RenderTemplate(w, r, "community.gohtml", &Template{
//      Title: "Community | Off Ended",
//    })
//  }
//}
//
//func (m *Repository) Privacy(w http.ResponseWriter, r *http.Request) {
//  ok := HttpErrors(w, r, "GET")
//  if ok {
//    RenderTemplate(w, r, "privacy.gohtml", &Template{
//      Title: "Privacy Policy | Off Ended",
//    })
//  }
//}
//
//func (m *Repository) TOS(w http.ResponseWriter, r *http.Request) {
//  ok := HttpErrors(w, r, "GET")
//  if ok {
//    RenderTemplate(w, r, "tos.gohtml", &Template{
//      Title: "Terms of Service | Off Ended",
//    })
//  }
//}
