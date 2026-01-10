import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import ScrollToTop from '../common/ScrollToTop'
import Accounts from '../components/Accounts/Accounts'
import FeaturesDetails from '../pages/FeaturesDetails'

const Mainrouter = ({ heroRef }) => {
  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home heroRef={heroRef} />} />
          {/* <Route path='/accounts/:page' element={<Accounts />} />
          <Route path='/detail/:id' element={<FeaturesDetails />} /> */}
        </Routes>
    </>
  )
}

export default Mainrouter
