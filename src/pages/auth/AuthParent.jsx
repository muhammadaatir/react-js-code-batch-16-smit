import React from 'react'
import { Outlet } from "react-router";

const AuthParent = () => {
  return (
    <div>
      Login or sign up
      <Outlet />
      Website Name
      
    </div>
  )
}

export default AuthParent
