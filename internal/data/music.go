package data

import "off-ended-productions/internal/models"

func MusicData() []models.Music {
	return []models.Music{
		{
			Path:        "/",
			Title:       "Demo Event 1",
			Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
			Img:         "/public/img/twojz-music-logo.webp",
			Date:        "1/01/2025",
			Location:    "1111 Silver Spruce Dr. Running Springs CA 92382",
			Hours:       "6pm - 10pm",
		},
		{
			Path:        "/",
			Title:       "Demo Event 2",
			Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
			Img:         "/public/img/twojz-music-logo.webp",
			Date:        "1/30/2025",
			Location:    "1111 Silver Spruce Dr. Running Springs CA 92382",
			Hours:       "6pm - 10pm",
		},
		{
			Path:        "/",
			Title:       "Demo Event 3",
			Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
			Img:         "/public/img/twojz-music-logo.webp",
			Date:        "2/15/2025",
			Location:    "1111 Silver Spruce Dr. Running Springs CA 92382",
			Hours:       "6pm - 10pm",
		},
	}
}
