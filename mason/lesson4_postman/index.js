const express = require("express");

const app = express();

app.use(express.json());

// app.mehtod(path, callback(routehandler))
app.get("/", (req, res) => {
  res.json({ name: "mason" });
});

// if use post, we need to get data from body
// then use middleware app.use(express.json());
app.put("/:id", (req, res) => {
  const { name } = req.body;
  const { title } = req.query;
  const { id } = req.params;
  res.send({ name, title, id });
});

app.patch("/:id", (req, res) => {
  const { name } = req.body;
  const { title } = req.query;
  const { id } = req.params;
  res.send({ name, title, id });
});

app.post("/:id", (req, res) => {
  const { name } = req.body;
  const { title } = req.query;
  const { id } = req.params;
  res.send({ name, title, id });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
