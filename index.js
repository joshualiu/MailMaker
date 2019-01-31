const express = require("express");
// import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there v2" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
