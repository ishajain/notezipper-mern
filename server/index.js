import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { notes } from "./data/fkdata.js";

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  res.send(notes.find((note) => note._id === req.params.id));
});

app.listen(port, () => console.log(`Server is running at port ${port}`));
