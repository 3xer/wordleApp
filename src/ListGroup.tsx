import {
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

type Item = {
  text: string;
};

type ItemsListProps = {
  items: Item[]
}

const ListGroup: FunctionComponent<ItemsListProps> = ({ items }) => {

//export function ListGroup({ items }: { items: Item[] }): JSX.Element {
  

  return (
 
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item.text}</li>;
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