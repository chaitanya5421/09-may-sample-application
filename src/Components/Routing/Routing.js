import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../Contactus/ContactUs'
import CounterFuncComp from '../CounterFuncComp'
import Pagination from '../pagination/Pagination'
import Userdata from '../userdata/Usersdata'


function Routing() {
  return (
    <div>
        <Routes>
        <Route path="/users" element={<Userdata />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/counterApp" element={<CounterFuncComp />} />
      </Routes>
    </div>
  )
}

export default Routing