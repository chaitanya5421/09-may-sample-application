import React, { Component } from 'react'

export class LifeCyclemethods extends Component {
    constructor(props){
        super(props)
        console.log("constructor executed")
    }

    static getDerivedStateFromProps(props,state){
        console.log("static getderivedstatefromprops");
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount executed");
    }

  render() {
    console.log("render method executed")
    return (
      <div>LifeCyclemethods</div>
    )
  }
}

export default LifeCyclemethods