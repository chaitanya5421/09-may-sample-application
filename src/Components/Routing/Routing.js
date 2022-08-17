import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../Contactus/ContactUs'
import Pagination from '../pagination/Pagination'
import Userdata from '../userdata/Usersdata'


function Routing() {
  return (
    <div>
        <Routes>
        <Route path="/users" element={<Userdata />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default Routing