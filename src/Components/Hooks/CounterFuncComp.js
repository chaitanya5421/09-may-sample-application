import React, { useState } from 'react'

function CounterFuncComp() {
    const [counter,setCounter] = useState(0);
    const [inputvalue,setInputvalue] = useState("chaitanya");

 const increment = ()=>{
      setCounter(counter+1)
}
const decrement = ()=>{
  setCounter(counter-1)
}
const handleChange = (e)=>{
    const updatedValue = e.target.value;
    setInputvalue(updatedValue);
}

  return (
    <div>
      <h2>CounterFuncComp</h2>
      <p>{counter}</p>
      <button className='btn btn-secondary' onClick={increment}>Increment</button>
      <button className='btn btn-secondary' onClick={decrement}>decrement</button>
      
      <div className='mt-5'>
      <input placeHolder = "Enter......" onChange={handleChange} />{inputvalue}
      </div>
    </div>
  )
}

export default CounterFuncComp