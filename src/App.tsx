import { JSXElementConstructor, MouseEvent, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import ListGroup  from "./ListGroup";
import ItemInput from "./ItemInput";
import WordLength from "./WordLength";

//import { submitLength } from "./game";
type Item = {
  text: string;
};

function App() {
  
  const [items, setItems] =  useState<Item[]>([
   
  ]);

  return (
    //(old comment) word and header must match the propsinterface Props => { word: string[]; header: string;}
    <>
    
    <div>
    <WordLength/>
    <ItemInput onCreateItems={(text) => {
      setItems([
        ...items,
        {
          text: text,
        }
      ]);
    }}/>
    <ListGroup items={items} />
    </div>
  </>
  );
}

export default App;

