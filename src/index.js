const express = require("express");

const app = express();

const port = 3000;

app.get("/home", (req, res) => {
  console.log("Esto es un GET a '/home'");
  res.send("Esto es un GET a '/home' ");
});

app.listen(port, () => {
  console.log(`Servidor escuchando al puerto #${port}`);
});
