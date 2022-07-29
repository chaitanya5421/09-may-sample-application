import React,{Component} from 'react';

class  ClassComp extends Component{
        constructor(props){
            super(props)

            this.state = {
                count : 1
            }
        }

         decrement(){
            this.setState({
                count:this.state.count - 1
            })
        }
       
       
    render(){
        return(
            <div>
                <h2>This is Class Component</h2>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Add value</button>
                <button onClick={()=>{this.decrement()}}>decrement value</button>




                {/* <h2>Location : {this.props.location}</h2> */}

            </div>
        ) 
    }
}

export default ClassComp;