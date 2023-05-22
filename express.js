import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import fetchRandomWord from "./server.js";
import wordle from "./algorithm.js";
import { runData, getData } from "./dataBase.js";
import cors from "cors";
//import { engine } from "express-handlebars"
//import { marked } from "marked";

const app = express();
const arr = [];
let guesses = [];
const startNendTime = [0,0];

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

//res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080")

//get random word
app.post("/startgame/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080");
  console.log(req.body.number, req.body.duplicate);
  guesses=[]
//if you dont want repeating letters this will loop untill it has found that
  if (req.body.duplicate == false) {
    let dupe = 0;
    let word = '';
    while (dupe > -1) {
      word = fetchRandomWord(req.body.number);
      dupe = findWordWithoutDuplicates(word);
      console.log('dupeIndex', dupe)
      console.log('while')
    }
    arr.splice(0, 1, word);
    console.log("startGame", req.body.number,);

  } //else if you want repeating letters this will run
  else if(req.body.duplicate == true) {
    const word = fetchRandomWord(req.body.number);
    arr.splice(0, 1, word);
    console.log("startGame", req.body.number);
  }

  function findWordWithoutDuplicates(word) {
    const repeatingLetters = (word) =>
      word.findIndex((item, index) => word.lastIndexOf(item) !== index);
      const wordArray = [word];
      const splitWord = word.split("");
      console.log('splitword',splitWord);
      
      return repeatingLetters(splitWord);
    
  }
  
  startNendTime.splice(0, 1, new Date().getTime())
  
  res.status(200);
  //console.log(req.params.wordlength)
});

//request works

//send in guess
app.post("/guess/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080");
  
  guesses.splice(0,0, req.body.data)
  arr.splice(1, 1, req.body.data);
  console.log("is Body", req.body);
  console.log('arr in /guess ',arr);
  console.log('guesses: ', guesses)
  const gameResult = wordle(arr[1], arr[0])
  
  
  if(arr[1] == arr[0]){
    console.log('right answer')
    startNendTime.splice(1,1, new Date().getTime())
    res.json({ res: gameResult, rightAnswer: true, times: startNendTime, guessCount: guesses.length});
  }
  else{
    console.log('wrong answer')
    res.json({ res: gameResult, rightAnswer: false });
  }
  res.status(200);
   //wordle(req.body.data)
});

app.post("/sendScore/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080");
  console.log('body',req.body)
  console.log('res', req.body)
  if(req.body.data.data.rightAnswer){
    runData(req.body.data.data, req.body.name)
 
  }
  

  res.status(200);
  res.send("word set");
});

app.get("/highscore", async (req, res) => {
  const scores = await getData();
  res.render("highscore", { scores });
  
});

/*
app.get("/homepage", async (req, res) => {
  const movies = await api.getMovies();
  res.render("homepage", { movies });
});
*/

app.get("/about", (req, res) => {
  res.render("about");
});

console.log("listening");
app.listen(5080);


