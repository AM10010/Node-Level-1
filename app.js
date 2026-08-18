const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Data = require("./models/dataSchema");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

mongoose
  .connect(
    "mongodb+srv://mabanoub826_db_user:X1DLOdnTIxCYF373@cluster0.4vbiftl.mongodb.net/all-data?appName=Cluster0",
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  app.post("/submit", (req, res) => {
  console.log(req.body);
  const newData = new Data({
    nameForm: req.body.nameForm,
  });
  newData.save().then(() => {
    res.redirect("/");
  }).catch((err) => {
    console.error("Error saving data:", err);
    res.status(500).send("Error saving data");
  });
});
