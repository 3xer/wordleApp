import { json } from "express";
import * as fs from "fs";
import words5 from "./words5.js";
import words6 from "./words6.js";
import words7 from "./words7.js";
import words8 from "./words8.js";
import words9 from "./words9.js";
import words10 from "./words10.js";


//takes wordlength and returns a word with the selected length (5 -> 10 letters)
function fetchRandomWord(wordLength) {
  const fakeDB = [];
  if (wordLength == 5){
    const wordIndex = Math.floor(Math.random() * words5.words.length);
    const word =  words5.words[wordIndex]

    console.log('5 letters')
    
    console.log(word)
    return word
  } 
  else if (wordLength == 6) {
    const wordIndex = Math.floor(Math.random() * words6.words.length);
    console.log('6')
    return words6.words[wordIndex]
  } 
  else if (wordLength == 7) {
    const wordIndex = Math.floor(Math.random() * words7.words.length);
    console.log('7')
    return words7.words[wordIndex]
  } 
  else if (wordLength == 8) {
    const wordIndex = Math.floor(Math.random() * words8.words.length);
    console.log('8')
    return words8.words[wordIndex]
  } 
  else if (wordLength == 9) {
    const wordIndex = Math.floor(Math.random() * words9.words.length);
    console.log('9')
    return words9.words[wordIndex]
  } 
  else if (wordLength == 10) {
    console.log('10')
    const wordIndex = Math.floor(Math.random() * words10.words.length)
    return words10.words[wordIndex]
  }
  else{
    console.log('invalid length')
  }

}
export default fetchRandomWord;
//wordle('guess', fetchRandomWord(5))
