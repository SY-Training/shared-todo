const express = require("express");
const sanitizeHtml = require("sanitize-html");
const path = require("path");
const db = require("./db");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

//app.use(db);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("*", (req, res) => {
  res.contentType("json");
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});
app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});

app.post("/create-item", (req, res) => {
  console.log("Hit server side");
  console.log(req.body.text);
  res.send("hitoooooo!");
});
