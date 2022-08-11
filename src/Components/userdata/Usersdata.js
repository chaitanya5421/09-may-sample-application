import React, { Component } from 'react'

class Userdata extends Component{
    constructor(props){
        super(props);
        this.state={
            UsersData:[]
        }
    }
    

    getUserData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        this.setState({UsersData:data})
    }

    componentDidMount(){
        this.getUserData();
    }

    render(){
        return(
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.UsersData.length ? (this.state.UsersData.map((user)=>(
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
}

export default Userdata;