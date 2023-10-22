import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

function PrivateRoutes() {
    const navigate=useNavigate()

    let auth=true;      // can be used when actually getting jwt token from the api
  return (
    auth? <Outlet/> :<Navigate to='/'/>
  )
}

export default PrivateRoutes