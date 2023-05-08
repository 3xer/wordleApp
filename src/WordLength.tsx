import { useState } from "react";
/*              
                <button type="submit" value={6}>6</button>
                <button type="submit" value={7}>7</button>
                <button type="submit" value={8}>8</button>
                <button type="submit" value={9}>9</button>
                <button type="submit" value={10}>10</button>
                */

type NumberProp = {
  number: number;
};
export function WordLength({ giveLength }) {
  //number == current state setNumber== function that updates state
  // TODO ---Do this later on the word submit---
  const [number, setNumber] = useState();
  const [checkbox, setCheckbox] = useState(false);

  async function setGameParams(number: Number, checkbox: boolean) {
    console.log(checkbox);
    const getLength = await fetch("/startgame/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ number: number, duplicate: checkbox }),
    });
  }

  return (
    <>
      <p>choose how many letters should be in the word</p>
      <form
        onSubmit={(ev) => {
          setNumber(number);
          setCheckbox(checkbox);
          setGameParams(number, checkbox);
          giveLength(number);

          ev.preventDefault();
        }}
      >
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />

        <input
          type="checkbox"
          checked={checkbox}
          onChange={(event) => setCheckbox(event.target.checked)}
        />

        <button type="submit">submit length 5-10</button>
      </form>
    </>
  );
}
export default WordLength;
