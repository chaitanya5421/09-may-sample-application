import React from 'react'
import './StyleComponent.css'

function ChildStyleComp(props) {
    let stylevalue = props.stylevalue ? 'stylevalue' : ""
  return (
    <div>
        <h2 className={stylevalue}>Styled child Component</h2>
    </div>
  )
}

export default ChildStyleComp