export async function SendGuess (data:string){
    //   console.log(JSON.stringify(data))
        const response = await fetch ('/guess/', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
    
            body: JSON.stringify({ data }),
        });
    
        const result: Response[] = await response.json();
        console.log("Success:", result);
    
        return (
            result.map((item) => <p className={item.result}>{item.letter}</p>)
            )
      }