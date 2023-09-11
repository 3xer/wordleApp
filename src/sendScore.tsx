import { FC, useState } from "react";

const SendScore: FC <any> = (data) => {
  const [text, setText] = useState("");
  console.log("sendguess result: ", data);
    async function   postScore(data:any, text:any) {
      const sendScore = await fetch("/sendScore/", {
        method: "POST", 
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({data, name: text})
      })
    }

  return (
    <>
      <form onSubmit={(ev) =>{
        ev.preventDefault();
        postScore(data, text)
        console.log(text)
      }}>
        <input 
          disabled = {!data.data.rightAnswer}
          type="text"
          className="nameInput"
          value={text}
          onChange={(ev) => setText(ev.target.value)}
        />
        <button disabled = {!data.data.rightAnswer} type="submit">send result</button>
      </form>
    </>
  );
};
export default SendScore;


/*
 TODO take data and send differance between times,
 guesses(add guess counter) and send settings from 
 the game to database, then render data from the 
 database to the /highscore page
*/