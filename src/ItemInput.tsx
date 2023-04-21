import { FC, useState } from "react";

type ItemInputProps ={
    onCreateItems: (text: string) => void;
};
type Item = {
    text: string,
  };

const ItemInput: FC<ItemInputProps> = ({ onCreateItems }) => {
  const [text, setText] = useState();
  

  async function SendGuess (data:string){
   console.log(JSON.stringify(data))

    const response: Response = await fetch ('http://localhost:5080/game/play/', {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },

        body:  JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  }
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
  
    
  return (
    <form onSubmit={(ev) => {
       
        ev.preventDefault();
        onCreateItems(text)
        SendGuess(text);
    }}>
      <input
      
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
export default ItemInput;
