const express = require("express");
const sanitizeHtml = require("sanitize-html");
const path = require("path");
const db = require("./db");

const app = express();
const port = process.env.PORT || 3000;

//app.use(db);

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
