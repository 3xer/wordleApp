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

/*import {
  FunctionComponent,
  JSXElementConstructor,
  MouseEvent,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";

//import { submitLength }  from './game'
//import { wordIsAllowed } from "./game";

type ResultGuess = {
  letter: string,
  result: 'missplaced' | 'correct' | 'incorrect',
};

type ResultArray = [
  ResultGuess,
]

const ListGroup: FunctionComponent<ResultGuess[]> = (guessResult) => {

//export function ListGroup({ items }: { items: Item[] }): JSX.Element {
  
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH
  return (
      <ul>
        {guessResult.map((letter, index) => {
          return <li key={index} className={letter.result}>{letter.letter}</li>;
        })}
      </ul>
      );
}

export default ListGroup;


/*
 <input
          type="text"
          id="letter-input"
          className="input"
          value={text}
          maxLength={5}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">submit</button>
*/
