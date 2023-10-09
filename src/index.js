const express = require("express");

const app = express();

const port = 3000;

app.get("/*", (res, req) => {
  console.log("Esto es una ruta random");
  res.send("Esto es una ruta random");
});

app.get("/get", (req, res) => {
  console.log("Esto es un GET a '/get'");
  res.send("Esto es un GET a '/get'");
});

app.get("/redirect", (req, res) => {
  console.log("Esto es un GET a '/redirect'");
    res.send("Esto es un GET a '/redirect'");
    
});

app.listen(port, () => {
  console.log(`Servidor escuchando al puerto #${port}`);
});
