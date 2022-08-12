import React, { Component } from 'react'

export class Pagination extends Component {
    state = {
        pageNumber :1,
        users:[]
    }

    getUsersData = async()=>{
        const response  = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
        {
        method:'GET',
        headers:{
            'app-id' : "61c96b43d29afcdc8a860831",
        }
    });
    const { data } = await response.json();
    this.setState({users:data});
    console.log(data)
    }

    componentDidMount(){
        this.getUsersData();
    }

    componentDidUpdate(prevsProps,prevsState){
      // 1!=2
      if(prevsState.pageNumber !== this.state.pageNumber){
        this.getUsersData();
      }
     }

    handleButtonClick = (num) =>{
    // num = parseInt(num);
    console.log(num);
    this.setState({pageNumber:num})
   }

 


  render() {
    return (
      <div>
        <div className='container'>
        <h2>Pagination</h2>
        
            {this.state.users && this.state.users.length>0 && this.state.users.map((user)=>(
              <div className='row'> 
                <div className='col-md-6 my-4'>
                  <div className='card'>
                    <div className='row'>
                      <div className='col-md-4 py-4'>
                        <img className='img-fluid' src={user.picture} />
                      </div>
                      <div className='col-md-8'>
                          <h3>{user.id}</h3>
                          <h3>{user.title}{user.firstName}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) }
       
        </div>

        <div className='container'>
            {[1,2,3,4,5,6,7,8,9].map((num)=>(
              <button className='btn btn-primary me-2' 
              onClick={()=>{this.handleButtonClick(num)}}>{num}</button>
            ))}
        </div>
      </div>
    )
  }
}

export default Pagination