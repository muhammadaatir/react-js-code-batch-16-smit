import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { MyContextProvider } from '../Provider'

const Layout = () => {
  const [data, setData] = useState("smit")
  let number = 1
  console.log(number)
  number = 2
  console.log(data)
  useEffect(() => {
    setData("saylani")

  }, [])
  console.log(data)
  return (
    <div>
      <MyContextProvider>
        <Header value={data} updateData={setData} />
        <Outlet />
        <Footer />
      </MyContextProvider>
    </div>
  )
}

export default Layout
