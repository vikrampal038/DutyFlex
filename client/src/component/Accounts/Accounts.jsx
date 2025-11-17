import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Accounts = () => {
    const {page}=useParams()

  return (
    <div>
        <h1>this is account page </h1>
      {page=="register" && <h1>
        
        this is Regsiter  page</h1>}
        <NavLink to="/accounts/register" >  Reigster Now</NavLink>

    </div>
  )
}

export default Accounts
