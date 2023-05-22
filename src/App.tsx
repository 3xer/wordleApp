import { useState } from "react";
import ListGroup from "./ListGroup";
import ItemInput from "./ItemInput";
import WordLength from "./WordLength";
import SendGuess from "./sendScore";

type Item = {
  letter: string;
  result: string;
};
type StringLength = {
  number: any
 
};

function App() {
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState()

  return (
    <>
      <div>
        <WordLength  
          
          giveLength={(number) => {
            setNumber(number);
          }}
        />
        <ItemInput length={number} />
       
      </div>
    </>
  );
}

export default App;

