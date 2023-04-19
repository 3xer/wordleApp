import { useState } from "react";
/*              
                <button type="submit" value={6}>6</button>
                <button type="submit" value={7}>7</button>
                <button type="submit" value={8}>8</button>
                <button type="submit" value={9}>9</button>
                <button type="submit" value={10}>10</button>
                */

type NumberProp = {
    number: number,
};
export  function WordLength() { 
    //number == current state setNumber== function that updates state
    // TODO ---Do this later on the word submit---
    const [number, setNumber] = useState()
    async function setWordLength (number){
        const getLength = await fetch('http://localhost:5080/game/'+ number,{
            mode: "no-cors"
        })
        console.log(getLength)
    }
   
    return(
        <>
        <p>choose how many letters should be in the word</p>
            <form onSubmit={(ev) => {
                setNumber(number)
                setWordLength(number)
                ev.preventDefault();
                }}>
                
                <input type="number" value={number} 
                onChange={(event) => setNumber(event.target.value)}/>
                <button type="submit">submit 5-10</button>
                
            </form>
        </>
       
    )
}
export default WordLength;
