import React, { useEffect, useRef } from 'react'

function UseRef() {
    const userData = useRef(null);

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(userData.current.value = "welcome to React");
    }

    useEffect(()=>{
        userData.current.focus();
    },[])

  return (
    //useState will re-render when the content change and update in the UI.
    
    //useRef doesn't notify you when its content changes. Mutating the(.current)
    // property doesn't cause a re-render
    <div>
        <h2>UseRef</h2>
        <form onSubmit={submitHandler}>
            <input type="text" ref={userData} placeholder='Enter your Name' />
            <button className='btn btn-success'>Submit</button>
        </form>
    </div>
  )
}

export default UseRef