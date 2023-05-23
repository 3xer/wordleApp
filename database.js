import mongoose from "mongoose";

const Score = mongoose.model("Score", {
  guesses: Number,
  timeSec: Number,
  wordLength: Number,
  repeatingLetters: Boolean,
  name: String,

});

export async function runData(data, name) {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  const score = new Score ({
    guesses: data.guessCount, 
    timeSec: (data.times[1] / 1000 - data.times[0]  / 1000),
    wordLength: data.res.length,
    repeatingLetters: true,
    name: name,
  })
  await score.save();
  //db.scores.find()
  const scores = await Score.find();
  console.log(scores);
}
export async function getData(){
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  return  await Score.find() 
}


