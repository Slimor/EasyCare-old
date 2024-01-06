const express = require("express");
const { connectToDb, getDb } = require("./db");

const app = express();

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Listing port 3000");
    });
    db = getDb();
  }
});

app.get("Klinika/Pacjenci", (req, res) => {
  let names = [];

  db.collection("names")
    .find()
    .forEach((imie) => names.push(imie))
    .then(() => {
      res.status(200).json(names);
    })
    .catch(() => {
      res.status(500).json({ error: "Couldnt fetch documents" });
    });
});
