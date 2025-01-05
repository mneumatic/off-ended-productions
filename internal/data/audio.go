package data

import (
	"off-ended-productions/internal/models"
)

func AudioData() []models.Audio {
	return []models.Audio{
		{
			Path:  "/public/audio/pilot-2.mp3",
			Title: "Pilot #2",
		},
		{
			Path:  "/public/audio/pilot-1.mp3",
			Title: "Pilot #1",
		},
	}
}
