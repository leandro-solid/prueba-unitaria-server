const express = require("express");

const app = express();
const port = 3001;

app.get("/get", (req, res) => {
  console.log("Esto es un GET a '/get'");
  res.send("Esto es un GET a '/get'");
});

app.get("/redirect", (req, res) => {
  console.log("Esto es un GET a '/redirect', redirige a '/get");
  res.redirect("/get");
});

app.get("/options", (req, res) => {
  console.log("Esta ruta es '/options' ");
  res.json({
    options: [
      {
        label: "Option 1",
        description: "Option 1",
        value: "opt1",
      },
      {
        label: "Option 2",
        description: "Option 2",
        value: "opt2",
      },
      {
        label: "Option 3",
        description: "Option 3",
        value: "opt3",
      },
      {
        label: "Option 4",
        description: "Option 4",
        value: "opt4",
      },
      {
        label: "Option 5",
        description: "Option 5",
        value: "opt5",
      },
    ],
    after: "1234=",
    searchable: true,
  });
});

app.get("/json", (req, res) => {
  console.log("Esta ruta es '/options' ");
  res.json({
    user: 'test user',
    age: '34'
  })
})

app.get("/*", (req, res) => {
  console.log("Esto es una ruta random");
  res.send("Esto es una ruta random");
});

app.listen(port, () => {
  console.log(`Servidor escuchando al puerto ${port}`);
});
