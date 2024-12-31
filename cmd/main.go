package main

import (
	"fmt"
	"log"
	"net/http"
	"off-ended-productions/internal"
	"os"
	"time"
)

var app internal.AppConfig

func main() {
	err := run()
	if err != nil {
		log.Fatal(err)
	}

	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = "8080"
	}

	// Format port string
	addr := fmt.Sprintf("localhost:%s", port)

	srv := &http.Server{
		Addr:         addr,
		Handler:      routes(&app),
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  15 * time.Second,
	}

	log.Println("main: running server on port", port)
	if err := srv.ListenAndServe(); err != nil {
		log.Fatalf("main: couldn't start server: %v\n", err)
	}
}

func run() error {
	// Session
	//gob.Register(models.Contact{})

	// Set Production / Development
	app.Production = false

	// Set Sessions
	//session = scs.New()
	//session.Lifetime = 24 * time.Hour
	//session.Cookie.Persist = true
	//session.Cookie.SameSite = http.SameSiteLaxMode
	//session.Cookie.Secure = app.Production // Sets Cookie to Secure true in Production.
	//
	//app.Session = session
	//app.Testimonials = data.TestimonialData()
	//app.Products = data.ProductData()

	tc, err := internal.CreateTemplateCache()
	if err != nil {
		log.Fatal("cannot create template cache")
	}

	app.TemplateCache = tc
	app.UseCache = false

	repo := internal.NewRepo(&app)
	internal.NewHandlers(repo)

	internal.NewTemplates(&app)
	return nil
}
