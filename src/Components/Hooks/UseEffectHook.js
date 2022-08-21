import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    {/* Rule of Hooks
            1 - call the Hooks always at the top level. 
            2 - dont call the Hooks conditionally,Loops, and nested functions.
    */}

        const [userData,setUserData] = useState([]);

        // getuserdata(){
        //     const [counter,setCounter] = useState(0);
        // }

        // if(true){
        //     const [counter,setCounter] = useState(0);
        // }


        // useEffect will take two arguments
        // 1 call back function
        // 2 dependancy array

        

        const getUserData = async ()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log(data);
            setUserData(data);
        }

        // same as componentdidMount
        // if you are no going to pass the dependancy array,The useEffect will be called when the state is updated

        // if you pass the dependancy array as an empty array,the useEffect will 
        // be called for the first time when the component is mounted on the DOM.
        useEffect(()=>{
            getUserData();
        },[])


        // componentdidUpdate
        // when ComponentDidUpdate will be called
        // when the state or props is Changed(updating phase will occur) 
        //  in the updating phase you can a sideeffects

  return (
    <div>
        <h2>UseEffectHook</h2>
        <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.length ? (userData.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))):<p>loading......</p>}
                    </tbody>
                </table>
    </div>
  )
}

export default UseEffectHook