import React, { Component } from 'react'

class ClassStylecomp extends Component {
    constructor(){
        super()
        this.state = {
            color:''
        }
    }

    changeColorFunc(){
        this.setState({
            color:"red"
        })
    }

  render() {
    return (
      <div>
        <h2 style={{color:this.state.color}}>Class Style Comp</h2>
        <button onClick={()=>{this.changeColorFunc()}}>Change Color</button>
      </div>
    )
  }
}

export default ClassStylecomp