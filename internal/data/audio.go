package data

import (
	"off-ended-productions/internal/models"
)

func AudioData() []models.Audio {
	return []models.Audio{
		{
			Path:  "https://anchor.fm/s/f71e47c0/podcast/rss",
			Title: "Ep. 2 - 2Jz Finds His Bracelet | CA Fires",
		},
		{
			Path:  "https://anchor.fm/s/f71e47c0/podcast/rss",
			Title: "Ep. 1 - 2Jz Loses His Bracelet",
		},
	}
}
