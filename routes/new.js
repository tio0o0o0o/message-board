const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  const id = req.app.locals.messages.length;
  const text = req.body.text;
  const user = req.body.user;
  const added = new Date();
  req.app.locals.messages.push({
    id: id,
    text: text,
    user: user,
    added: added,
  });
  res.redirect("/");
});

module.exports = router;
