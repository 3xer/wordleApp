import { FC, useState } from "react";
import ListGroup from "./ListGroup";
import SendScore from "./sendScore";


type ItemInputProps ={
    onCreateItems: (text:Item[]) => void;
};
type Wordlength ={
  length: Number
  winStatus: {rightAnswer: boolean, times: []}
}

type Item = {
  letter: string;
  result: string;
};
type Text = {
  text: String | undefined
}
type Times= [
  Number
]
type Status = {
data: {
  res: Item[]
  rightAnswer: boolean;
  times: Times
}
}

const ItemInput: FC<Wordlength> = ({ length }) => {
  const [text, setText] = useState<Text>();
  const [items, setItems] =  useState<Item[]>([]);
  const [status, setStatus] = useState<Status>({
    rightAnswer: false
  })

  
  async function SendGuess (data:string) {
   console.log('in send guess', JSON.stringify(data))
    const response = await fetch ('/guess/', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
    });
    const result = await response.json();
    console.log("Success:", result.res);
    setStatus(result)
    
   // onCreateItems(result.res);
   console.log('setItems',[...result.res, items])
    setItems([...result.res, items])

    
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
     <button type="submit">submit guess</button>
   </form>
   <SendScore data={status}/>
   <ListGroup items={items}/>
   
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
  