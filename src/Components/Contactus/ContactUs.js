import React from 'react'

function ContactUs() {

   const handleSubmit = (e)=>{
    e.preventDefault();
        console.log("submitted")
    }

    const handleChange = (e)=>{
            console.log(e.target.value);
    }

  return (
    <div>
      <div className='container'>
        <div className="row">
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
            <div className='col-md-4'></div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs