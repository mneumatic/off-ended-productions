package data

import (
	"off-ended-productions/internal/models"
)

func CategoryData() []models.Category {
	return []models.Category{
		{
			Url:   "/podcast",
			Img:   "oep-podcast-logo.webp",
			Title: "The Off Ended Podcast",
		},
		{
			Url:   "/twojz-music",
			Img:   "twojz-music-logo.webp",
			Title: "2Jz Music",
		},
		{
			Url:   "/platinum-signatures",
			Img:   "platinum-signatures.webp",
			Title: "Platinum Signatures",
		},
		{
			Url:   "/mneumatic-designs",
			Img:   "mneumatic-designs.webp",
			Title: "MNEUMATIC Designs",
		},
		{
			Url:   "/",
			Img:   "oep-gaming.webp",
			Title: "Off Ended Gaming",
		},
	}
}
