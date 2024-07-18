import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const _directoryname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var password ="";
var correctPassword = "";
var correctUsername = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(_directoryname));

app.post("/login", (req,res) => {
  if(req.body["password"] === correctPassword && req.body["username"] === correctUsername){
    res.sendFile(_directoryname + "/home.html");
  } else {
    res.sendFile(_directoryname + "/index.html");
  }
});

app.post("/register", (req,res) => {
  res.sendFile(_directoryname + "/register.html");
});

app.post("/regis", (req, res) => {
  correctPassword = req.body["password"];
  correctUsername = req.body["username"];
  res.sendFile(_directoryname + "/index.html");
  console.log(correctPassword);
  console.log(correctUsername);
});

app.get("/", (req, res) => {
  res.sendFile(_directoryname + "/index.html", { message: "Invalid username or password." });
});


app.listen(port, ()=>{
  console.log("Success");
});