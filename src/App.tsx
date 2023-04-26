import { useState } from "react";
import ListGroup  from "./ListGroup";
import ItemInput from "./ItemInput";
import WordLength from "./WordLength";

//import { submitLength } from "./game";
type Item = {
  text: string;
};
type Guess= {
  guess: string,
  wordlength: number;
}
type ResultGuess = {
  letter: string,
  result: 'missplaced' | 'correct' | 'incorrect',
};

function App() {
  
  const [items, setItems] =  useState<Item[]>([
   
  ]);
  const [letter, setGuess] = useState<ResultGuess[]>()

  return (
    //(old comment) word and header must match the propsinterface Props => { word: string[]; header: string;}
    <>
    
    <div>
    <WordLength/>
    <ItemInput onCreateItems={async (text) => {
       const response = await fetch ('/guess/', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({ text }),
    });
    const resJson:ResultGuess[] = await response.json();
    setGuess(resJson)
      /*setItems([
        ...items,
        {
          text: text,
        }
      ]);*/
    }}
   
    />
     <ListGroup text={setGuess} />

    
    </div>
  </>
  );
}

export default App;

