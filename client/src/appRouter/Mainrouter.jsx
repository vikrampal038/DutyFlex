import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Platform from '../pages/Platform'
import Solutions from '../pages/Solutions'
import Resources from '../pages/Resources'
import Pricing from '../pages/Pricing'
import Accounts from '../components/Accounts/Accounts'
import FeaturesDetails from '../pages/FeaturesDetails'

const Mainrouter = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/platform' element={<Platform />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/pricing' element={<Pricing />} /> 
          <Route path='/accounts/:page' element={<Accounts />} />
          <Route path='/detail/:id' element={<FeaturesDetails />} />
          

        </Routes>
      </div>
    </>
  )
}

export default Mainrouter
