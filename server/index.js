const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

app.get("/coding", (req, res) => {
  let sql = 'SELECT Quote FROM Quote WHERE category = "Coding Quote" ORDER BY RAND() LIMIT 1';
  con.query(sql, (error, result) => {
    if (error) res.send(error);
    else res.send(result);
  });
});

app.get("/confidence", (req, res) => {
  let sql = 'SELECT Quote FROM Quote WHERE category = "Confidence Quote" ORDER BY RAND() LIMIT 1';
  con.query(sql, (error, result) => {
    if (error) res.send(error);
    else res.send(result);
  });
});

app.get("/happy", (req, res) => {
  let sql = 'SELECT Quote FROM Quote WHERE category = "Happy Quote" ORDER BY RAND() LIMIT 1';
  con.query(sql, (error, result) => {
    if (error) res.send(error);
    else res.send(result);
  });
});

app.get("/work", (req, res) => {
  let sql = 'SELECT Quote FROM Quote WHERE category = "Work Quote" ORDER BY RAND() LIMIT 1';
  con.query(sql, (error, result) => {
    if (error) res.send(error);
    else res.send(result);
  });
});

app.listen(9000, () => {
  console.log("server @9000 ready to serve");
});
