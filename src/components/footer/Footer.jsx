import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'

const Footer = () => {
  const {data, updateData} = useContext(MyContext)
  updateData(10)
  console.log(data)
  return (
    <div>
      Footer
    </div>
  )
}

export default Footer
