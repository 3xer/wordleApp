import { FC, useState } from "react";
import ListGroup from "./ListGroup";

type ItemInputProps ={
    onCreateItems: (text:Item[]) => void;
};
type Wordlength ={
  length: Number
}
type sendGuess = {
  SendGuess: (data:string) => void; 
}
type Item = {
  letter: string;
  result: string;
};
type Text ={
  text: String | undefined
}

const ItemInput: FC<Wordlength> = ({ length }) => {
  const [text, setText] = useState<Text>();
  const [items, setItems] =  useState<Item[]>([]);

  
  async function SendGuess (data:string) {
   console.log('in send guess', JSON.stringify(data))
    const response = await fetch ('http://localhost:5080/guess/', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
    });
    const result = await response.json();
    console.log("Success:", result.res);
    
   // onCreateItems(result.res);
   console.log([result.res, items])
    setItems([result.res, items])
    // result.res is a array of objects like type Item = {letter: string; result: string;};
  }
  return (
    <>
    <form onSubmit={(ev) => {
       
       ev.preventDefault();
       SendGuess(text)
   }}>
     <input
      minLength={length}
      maxLength={length}
       value={text}
       onChange={(ev) => setText(ev.target.value)}
     />
     <button type="submit">submit</button>
   </form>
   <ListGroup items={items} />
    </>
    
   
  );
};
export default ItemInput;




/*import { FC, useState } from "react";
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
  