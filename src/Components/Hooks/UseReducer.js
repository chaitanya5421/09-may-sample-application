import React,{useReducer} from 'react'

function UseReducer() {
  const reducer = (currectstate,action)=>{
    console.log(action)
    // {type:"INCREMENT",payload:5}
    switch(action.type){
        case "INCREMENT":
            return currectstate + action.payload;

        case "DECREMENT":
            return currectstate - action.payload;
        
        default :
        return currectstate;

    }

    //Reducer is used to update the state based on action
    // And returns an updated state.
    // INCREMENT
    // DECREMENT
  }

    const  [count,dispatch] =  useReducer(reducer,0);

  return (
    <div>
        <h2>useReducer</h2>
        <p className='mt-2'>{count}</p>
        <div className='mt-2'>
            <button className='btn btn-info mx-3'
             onClick={()=>{dispatch({type:"INCREMENT",payload:5})}}>Increment</button>
            <button className='btn btn-info'
             onClick={()=>{dispatch({type:"DECREMENT",payload:5})}}
            >Decrement</button>
        </div>
    </div>
  )
}

export default UseReducer