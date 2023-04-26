import { FC, useState } from "react";
import { SendGuess } from "./sendGuess";

type ItemInputProps ={
    onCreateItems: (text: string) => void;
};
type Item = {
    text: string,
  };

const ItemInput: FC<ItemInputProps> = ({ onCreateItems }) => {
  const [text, setText] = useState();
  

  return (
    <form onSubmit={(ev) => {
       
        ev.preventDefault();
        onCreateItems(text)
        //SendGuess(text);
    }}>
      <input
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button type="submit">submit</button>
    </form>
    //{result}
  );
};
export default ItemInput;


/*
    const response = await fetch('http://localhost:5080/game/play/' + text, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        }
        
    })
    
    const resan = await response.json();
    console.log( response)
    }*/
  