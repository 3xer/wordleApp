import express from "express";
import { engine } from "express-handlebars"
import { marked } from "marked"  
import fetchRandomWord from "./server.js"
import wordle from "./algorithm.js";
import cors from "cors"
//import { engine } from "express-handlebars"
//import { marked } from "marked";

const app = express();
const arr = []


app.use(express.json())
app.use(cors())

app.engine("handlebars",
    engine({
      helpers: {
        markdown: (md) => marked(md),
      },
    })
);
  app.set("view engine", "handlebars");
  app.set("views", "./handlebars");

app.get('/')
  
 //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080") 

 //get random word
app.post('/startgame/', (req, res) => {
   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080")
    arr.splice(0, 1, fetchRandomWord(req.body.number))
    console.log('startGame', req.body)
   
    res.status(200);
    //console.log(req.params.wordlength)
    
})

//request works


//send in guess
app.post('/guess/', (req, res) => { 
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080") 
    //res.dataBase.. highscore
    arr.splice(1,1, req.body.data)
    
    
    console.log('is Body', req.body)
    console.log(arr)
    res.status(200)
    res.json( { 'res': wordle(arr[1], arr[0]) })//wordle(req.body.data)
    
    
    
});



app.get('/game/play/:word', (req, res) => { 
   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080")
  //res.dataBase.. highscore
  const resWord = wordle(req.params.word, arr[0])
  const resObj = {"elements": resWord,}
  console.log('  '+resWord[0].letter+ ' resobj')
  res.json(resObj.elements)
  
  res.status(200)
  res.send('word set')
  
});

app.get('/highscore', (req, res) => {
  res.render('highscore')
});

app.get('/about', (req, res) => {
  res.render('about')
});

console.log('listening')
app.listen(5080);


