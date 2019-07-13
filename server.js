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
  knex
    .select("email", "hash")
    .from("login")
    .where("email", "=", req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return knex
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then(user => {
            res.json(user[0]);
          })
          .catch(err => res.status(400).json("unable to get user"));
      } else {
        res.status(400).json("wrong credentials");
      }
    })
    .catch(err => res.status(400).json("wrong credentials"));
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  knex
    .transaction(trx => {
      return trx
        .insert({
          hash: hash,
          email: email
        })
        .into("login")
        .returning("email")
        .then(loginEmail => {
          return trx("users")
            .returning("*")
            .insert({
              email: loginEmail[0],
              name: name,
              joined: new Date()
            })
            .then(user => {
              res.json(user[0]);
            });
        })
        .then(trx.commit);
    })
    .catch(err => res.status(400).json("unable to register"));
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  res.json("profile success");
  // res.status(404).json('profile error, no such user');
});

app.put("profile/:id", (req, res) => {
  const { id } = req.params;
  res.json("profile success");
  // res.status(404).json('profile error, no such user');
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port);

console.log("App is listening on port " + port);
