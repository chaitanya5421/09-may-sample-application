import React from 'react'

function Conditionalrend() {
    const age = 16;
    // if(age<18){
    //     return <h2>you are not eligible to Vote</h2>
    // }else{
    //     return <h2>you are eligible to vote</h2>
    // }

  return (
    <div>
        <h2>Functional conditional Component</h2>
        {(age<18) ? <h2>you are not eligible to vote</h2> : <h2>you are eligible to vote</h2> }
    </div>
  )
}

export default Conditionalrend