
import React from 'react'
import HomePage from "../Pages/HomePage"

import ServicePage from "../Pages/ServicePage"
import { Route, Routes } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import PeoplePage from '../Pages/PeoplePage'


const AllRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />

      <Route path='/people' element={<PeoplePage />} />
      <Route path='/service' element={<ServicePage/>}/>

    </Routes>
  )
}

export default AllRoutes