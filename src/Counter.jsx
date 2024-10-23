import { useState } from "react"

export default function Counter (){
  
   const [count, setCount] = useState(0);
   const addCount = () => {
    const newCount = count + 1;
    setCount(newCount)
   }

   const reduceCount =() =>{
    const mainusCount = count - 1;
    setCount(mainusCount);
   }

    return(
        <div>
            <h2>count:{count}</h2>
            <button onClick={addCount}>
                Add
            </button>
            <button onClick={reduceCount}>
                Reduce
            </button>
        </div>
    )
}