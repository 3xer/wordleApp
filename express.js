import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import fetchRandomWord from "./server.js";
import wordle from "./algorithm.js";
import { runData, getData } from "./dataBase.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from "url"


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
const arr = [];
let guesses = [];
const startNendTime = [0, 0];

app.use(express.json());
app.use(cors());

app.engine(
  "handlebars",
  engine({
    helpers: {
      markdown: (md) => marked(md),
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", "./handlebars");


app.get("/", (req, res) => {
res.sendFile(__dirname+`/dist/index.html`)
})
app.get("/script/", (req, res) => {
  res.sendFile(__dirname+'/dist/assets/index-d5041ed1.js')
})
app.get("/style/", (req, res) => {
  res.sendFile(__dirname+'/dist/assets/index-b09b7761.css')
})
//get random word
app.post("/startgame/", (req, res) => {
  
  console.log(req.body.number, req.body.duplicate);
  guesses = [];
  //if you dont want repeating letters this will loop untill it has found that
  if (req.body.duplicate == false) {
    let dupe = 0;
    let word = "";
    while (dupe > -1) {
      word = fetchRandomWord(req.body.number);
      dupe = findWordWithoutDuplicates(word);
      console.log("dupeIndex", dupe);
      console.log("while");
    }
    arr.splice(0, 1, word);
    console.log("startGame", req.body.number);
  } //else if you want repeating letters this will run
  else if (req.body.duplicate == true) {
    const word = fetchRandomWord(req.body.number);
    arr.splice(0, 1, word);
    console.log("startGame", req.body.number);
  }

  function findWordWithoutDuplicates(word) {
    const repeatingLetters = (word) =>
      word.findIndex((item, index) => word.lastIndexOf(item) !== index);
    const wordArray = [word];
    const splitWord = word.split("");
    console.log("splitword", splitWord);

    return repeatingLetters(splitWord);
  }

  startNendTime.splice(0, 1, new Date().getTime());

  res.status(200);
 
});



//send in guess
app.post("/guess/", (req, res) => {
  

  guesses.splice(0, 0, req.body.data);
  arr.splice(1, 1, req.body.data);
  console.log("is Body", req.body);
  console.log("arr in /guess ", arr);
  console.log("guesses: ", guesses);
  const gameResult = wordle(arr[1], arr[0]);

  if (arr[1] == arr[0]) {
    console.log("right answer");
    startNendTime.splice(1, 1, new Date().getTime());
    res.json({
      res: gameResult,
      rightAnswer: true,
      times: startNendTime,
      guessCount: guesses.length,
    });
  } else {
    console.log("wrong answer");
    res.json({ res: gameResult, rightAnswer: false });
  }
  res.status(200);
  //wordle(req.body.data)
});

app.post("/sendScore/", (req, res) => {
  console.log("body", req.body);
  console.log("res", req.body);
  if (req.body.data.data.rightAnswer) {
    runData(req.body.data.data, req.body.name);
  }

  res.status(200);
  res.send("word set");
});

app.get("/highscore", async (req, res) => {
  const scores = await getData();
  res.render("highscore", { scores });
});



app.get("/about", (req, res) => {
  res.render("about");
});

console.log("listening");
app.listen(5080);
