import React, { useEffect, useState } from 'react'

function UseEffectPagination() {
    const [userData,setUserData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const getPaginationData = async()=>{
        const response  = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
        {
        method:'GET',
        headers:{
            'app-id' : "61c96b43d29afcdc8a860831",
        }
    });
    const data = await response.json();
    console.log(data);
    setUserData(data.data);
    }

    //componentdidmount & componentdidUpdate
    useEffect(()=>{
        getPaginationData();

        return ()=>{
            //clean up 
        }
    }, [pageNumber])

  return (
    <div>
         <div className='container'>
        <h2>Pagination</h2>
        
            {userData && userData.length>0 && userData.map((user)=>(
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
              onClick={()=>{
                setPageNumber(num)
              }} 
              >{num}</button>
            ))}
        </div>
    </div>
  )
}

export default UseEffectPagination