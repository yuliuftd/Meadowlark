const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
/* eslint-disable no-undef */
const port = process.env.PORT || 3000;
/* eslint-disable no-undef */

const handlers = require("./lib/handlers");
// const fortune = require("./lib/fortune");
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

app.get("/", handlers.home);

app.get("/about", handlers.about);

/* eslint-disable no-undef */
app.use(express.static(__dirname + "/public"));
/* eslint-disable no-undef */

//custom 404 page
app.use(handlers.notFound);
//custom 500 page
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(port, () =>
    console.log(`Express started on http://localhost:${port} ...`)
  );
} else {
  module.exports = app;
}
