const mix = require("laravel-mix");

mix
  .js("src/js/app.js", "js/app.js")
  .css("src/scss/tailwind.css", "css/tailwind.css")
  .sass("src/scss/style.scss", "css/style.css")
  .copy("src/**.html", "docs")
  .setPublicPath("docs")
  .version();