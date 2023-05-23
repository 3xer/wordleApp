import { FunctionComponent, useState } from "react";

type Item = {
  letter: string;
  result: string;
};

const ListGroup: FunctionComponent<{ items: Item[] }> = ({ items }) => {
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
