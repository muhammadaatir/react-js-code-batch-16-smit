import React from 'react'
import { useParams } from 'react-router'

const Login = () => {
  let params = useParams();
  console.log(params)
  return (
    <div>
      Login1234
    </div>
  )
}

export default Login
