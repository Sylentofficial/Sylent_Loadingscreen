fx_version "cerulean"
game "gta5"
lua54 "yes"

author "Sylent"
description "Loadingscreen FiveM"
version "1.0.0"

loadscreen "html/index.html"
loadscreen_manual_shutdown "yes"

client_script {
	"client/client.lua"
}

files {
	"html/index.html",
	"html/css/style.css",
	"html/css/loading.css",
	"html/script.js",
	"html/assets/music.mp3",
	"html/assets/background/*.jpg",
}