import React from 'react';

function FunctComp(props){
    console.log(props)
    return (
        <div>
        <h2>Welcome to React and course Duration is {props.duration}</h2>
        <h2>This is Functional Component in {props.name} </h2>
        </div>
    )
}

export default FunctComp;