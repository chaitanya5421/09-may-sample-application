import React from 'react'
import ChildStyleComp from './ChildStyleComp'
import './StyleComponent.css'
import modulecss from './Stylecomp.module.css'
import ClassStylecomp from './ClassStylecomp'

function StyleComponent() {
    const inlineHead = {
        color:"orange",
        backgroundColor:"lightblue",
        fontSize:"25px"
    }
  return (
        // Css Stylesheet
        // Inline
        // Css modules

    <div>
        <h2 className='head'>StyleComponent</h2>
        <section style={{color:"Red",backgroundColor:"lightgreen"}}>This is Inline styles</section>

      <h2 style={inlineHead}>This is Inline Heading</h2>
      <ChildStyleComp stylevalue={true} />
      <h2 className={modulecss.head}>This is the external Module Css</h2>
      <ClassStylecomp />
    </div>
  )
}

export default StyleComponent