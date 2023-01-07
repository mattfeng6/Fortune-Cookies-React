const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "database-fortune-cookies.cctugaxm1pcv.us-east-1.rds.amazonaws.com",
  user: "Matt",
  password: "test123test123",
  database: "Cookie",
  port: 3306,
});

db.connect((err) => {
  if (err) console.log(err.message);
  console.log("db" + db.state);
});

// READ
app.get("/fortunes", (req, res) => {
  db.query("SELECT * FROM `fortune_cookies`", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/fortune/random", (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM `fortune_cookies` ORDER BY RAND() LIMIT 1",
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

// CREATE
app.post("/addFortune", (req, res) => {
  const content = req.body.content;

  db.query(
    "INSERT INTO `fortune_cookies` (content) VALUES (?)",
    content,
    (err, result) => {
      if (err) console.log(err);
      else {
        res.send("Content Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log(`server is running as expected`);
});
