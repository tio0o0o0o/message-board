const express = require("express");
const app = express();

app.locals.messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { messages: app.locals.messages });
});

app.get("/messages/:id", (req, res) => {
  const id = req.params.id;
  res.render("message", { message: app.locals.messages[id] });
});

const newRouter = require("./routes/new");

app.use("/new", newRouter);

app.listen(8080);
