const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// production
// const knex = require("knex")({
//   client: "pg",
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true
//   }
// });

// development
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "yunsangil",
    password: "",
    database: "postgres"
  }
});

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  console.log("test hit");
  return res.json({ test: "Hello, you're great" });
});

app.post("/signin", (req, res) => {
  if (req.body.email && req.body.password) {
    console.log(req.body);
    res.json("success");
  } else {
    res.status(400).json("signin error");
  }
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  console.log(email, name, password);
  knex("users")
    .returning("*")
    .insert({
      email: email,
      name: name,
      joined: new Date()
    })
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => res.status(400).json("unable to register"));

  // bcrypt.hash(password, saltRounds, function(err, hash) {
  //   console.log("hash", hash);
  //   bcrypt.compare(password, hash, function(err, res) {
  //     if (res) console.log("true");
  //     else console.log("false");
  //   });
  // });
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json("profile success");
  // res.status(404).json('profile error, no such user');
});

app.put("profile/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json("profile success");
  // res.status(404).json('profile error, no such user');
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port);

console.log("App is listening on port " + port);
