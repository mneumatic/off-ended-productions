package models

type Template struct {
	StringMap  map[string]string
	IntMap     map[string]int
	FloatMap   map[string]float32
	Data       map[string]interface{}
	CSRFToken  string
	Flash      string
	Warning    string
	Error      string
	Title      string
	Production bool
	Videos     interface{}
	Audio      interface{}
	Music      interface{}
	Events     interface{}
	Businesses interface{}
	Categories interface{}
}

type Video struct {
	Path string
}

type Audio struct {
	Path  string
	Title string
}

type Event struct {
	Path        string
	Title       string
	Description string
	Img         string
	Date        string
	Location    string
	Hours       string
}

type Music struct {
	Path        string
	Title       string
	Description string
	Img         string
	Date        string
	Location    string
	Hours       string
}

type Business struct {
	Path        string
	Title       string
	Description string
	Img         string
	Location    string
	Hours       string
	Phone       string
}

type Category struct {
	Url   string
	Img   string
	Title string
}
