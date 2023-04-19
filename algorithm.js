export default function wordle(guess, rightAnswer) {
  const input = guess.toUpperCase().split("");
  let answer = rightAnswer.toUpperCase().split("");
  let outArray = guess.toUpperCase().split("");
  let correctLetters = [];
  for (let i = 0; i < input.length; i++) {
    const inCorrect = {
      "letter": input[i],
      "result": "incorrect",
    };
    const correct = {
      "letter": input[i],
      "result": "correct",
    };
    if (answer.includes(input[i])) {
      if (outArray[i] == answer[i]) {
        outArray.splice(i, 1, correct);
        correctLetters.push(input[i]);
      }
    } else {
      outArray.splice(i, 1, inCorrect);
    }
  }
  for (let i = 0; i < outArray.length; i++) {
    const inCorrect = {
      "letter": input[i],
      "result": "incorrect",
    };
    if (correctLetters.includes(outArray[i])) {
      outArray.splice(i, 1, inCorrect);
    }
  }
  for (let i = 0; i < outArray.length; i++) {
    const missplaced = {
      "letter": input[i],
      "result": "missplaced",
    };
    if (answer.includes(outArray[i])) {
      outArray.splice(i, 1, missplaced);
    }
  }
  console.log(outArray)
  return outArray;
}
//wordle('guess', 'guess')