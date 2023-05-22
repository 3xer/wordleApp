import { FC, useState } from "react";


type stringProp = {
  giveLength: (n: string) => void
};
const WordLength: FC<stringProp> =  ({ giveLength }) => {
  //number == current state setNumber== function that updates state
  // TODO ---Do this later on the word submit---
  const [number, setNumber] = useState('5');
  const [checkbox, setCheckbox] = useState(false);

  async function setGameParams(number: string, checkbox: boolean) {
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
