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
  number: string
  setNumber: (number: string) => void
};

function App() {
  const [number, setNumber] = useState<StringLength>();
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

/*//import { submitLength } from "./game";
type Item = {
  text: string;
};
type Guess= {
  guess: string,
  wordlength: number;
}
type ResultGuess = {
  letter: string,
  result: 'missplaced' | 'correct' | 'incorrect';
};

function App() {
  
  const [items, setItems] =  useState<Item[]>([]);
  const [letter, setGuess] = useState<ResultGuess[]>([])

  return (
    //(old comment) word and header must match the propsinterface Props => { word: string[]; header: string;}
    <>
    
    <div>
    <WordLength/>
    <ItemInput onCreateItems={ (text) => {
      
    const resJson:ResultGuess[] = 
    [
      { letter: 'R', result: 'incorrect' },
      { letter: 'E', result: 'incorrect' },
      { letter: 'E', result: 'incorrect' },
      { letter: 'E', result: 'incorrect' },
      { letter: 'E', result: 'incorrect' }
    ]

    setGuess(resJson)
      /*setItems([
        ...items,
        {
          text: text,
        }
      ]);
    }}
   
    />
     <ListGroup letter={letter} />

    
    </div>
  </>
  );
}

export default App;

/*const response = await fetch ('/guess/', {
  method: "POST",
  mode: "cors",
  headers: {
      "Content-Type": "application/json",
  },

  body: JSON.stringify({ text }),
});*/
