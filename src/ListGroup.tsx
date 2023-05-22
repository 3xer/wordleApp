import { FunctionComponent, useState } from "react";

type Item = {
  letter: string;
  result: string;
};

const ListGroup: FunctionComponent<{ items: Item[] }> = ({ items }) => {

    
  

  /*if(allCorrect && items.length>= 4){
  const won = 'you won!!'
  console.log('allCorrect', items, ' ', allCorrect)
  console.log('items.length', items.length)

element.map((item, index) =>{
      return ( <li key={index} className={item.result}>{item.letter}</li>)
    })

}*/

  return (
    <>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index} className={item.result}>
              {item.letter}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;

