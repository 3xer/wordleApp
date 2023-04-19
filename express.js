import express from "express";
import { engine } from "express-handlebars"
import { marked } from "marked"  
import fetchRandomWord from "./server.js"
import wordle from "./algorithm.js";
//import { engine } from "express-handlebars"
//import { marked } from "marked";

const app = express();
const arr = []
const arr2 = []

app.use(express.json())

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
app.get('/game/:wordlength/', (req, res) => {
   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080")
    arr.splice(0, 1, fetchRandomWord(req.params.wordlength))
    //res.json(arr)
    console.log(arr)
    //res.contentType('json')
    res.status(200);
    //console.log(req.params.wordlength)
    
})

//request works



app.post('/game/play/', (req, res) => { 
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3080") 
    //res.dataBase.. highscore
    //arr2.splice(1,1, req.body)
    
    console.log('is Body', req.body)
    res.status(200)
    res.json(req.body)
    
    
    
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
     
});

app.get('/about', (req, res) => {

});

console.log('listening')
app.listen(5080);


