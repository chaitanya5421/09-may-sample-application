import React, { Component } from 'react'

export class Pagination extends Component {
    state = {
        pageNumber :1,
        data:[]
    }

    getUsersData = async()=>{
        const response  = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
        {
        method:'GET',
        headers:{
            'app-id' : "61c96b43d29afcdc8a860831",
        }
    });
    const data = await response.json();
    console.log(data);
    this.setState({data:data})
    console.log(this.state)

    }

    componentDidMount(){
        this.getUsersData();
    }

  render() {
    return (
      <div>
        <h2>Pagination</h2>

      </div>
    )
  }
}

export default Pagination