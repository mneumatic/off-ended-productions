package data

import "off-ended-productions/internal/models"

func EventsData() []models.Event {
	return []models.Event{
		{
			Path:        "/",
			Title:       "Demo Event 1",
			Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
			Img:         "/public/img/oep-podcast-logo.webp",
			Date:        "1/01/2025",
		},
		{
			Path:        "/",
			Title:       "Demo Event 2",
			Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
			Img:         "/public/img/oep-podcast-logo.webp",
			Date:        "1/01/2025",
		},
		{
			Path:        "/",
			Title:       "Demo Event 3",
			Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
			Img:         "/public/img/oep-podcast-logo.webp",
			Date:        "1/01/2025",
		},
	}
}
