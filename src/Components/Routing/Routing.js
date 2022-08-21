import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../Contactus/ContactUs'
import CounterFuncComp from '../Hooks/CounterFuncComp'
import UseEffectHook from '../Hooks/UseEffectHook'
import UseEffectPagination from '../Hooks/UseEffectPagination'
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
        <Route path="/userdata-useffect" element={<UseEffectHook />} />
        <Route path="/useEffect-pagination" element={<UseEffectPagination />} />
      </Routes>
    </div>
  )
}

export default Routing