import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Accounts from '../components/Accounts/Accounts'
import FeaturesDetails from '../pages/FeaturesDetails'

const Mainrouter = ({ heroRef }) => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home heroRef={heroRef} />} />
          {/* <Route path='/accounts/:page' element={<Accounts />} />
          <Route path='/detail/:id' element={<FeaturesDetails />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default Mainrouter
