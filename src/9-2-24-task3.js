import React,{useEffect,useState} from "react";

const LifeCyclefun=()=>{
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count );
    }, [count]);                       // <- add the count variable here
   const counterincre=()=>
   {
    setCount(() => count+ 1)
   }
   const counterdecre=()=>
   {
    setCount(() => count- 1)
   }
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={counterincre}>Increment</button>
        <button onClick={counterdecre}>decrement</button>
        <p>Calculation: {calculation}</p>
      </div>
    );
  
    
}
export default LifeCyclefun;
