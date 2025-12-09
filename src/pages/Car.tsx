import React from 'react'
import Footer from '../components/footer/Footer'

const Car = () => {
  return (
    <>
      <div className='grid gap-4 sticky grid-cols-8 justify-around px-4 bg-amber-50 align-top h-96 items-end'>
        <div className='bg-red-700 box-common order-4'></div>
        <div className='bg-green-700 box-common order-1'></div>
        <div className='bg-orange-700 box-common order-2'></div>
        <div className='bg-pink-700 box-common order-3'></div>
      </div>
      <div className='bg-blue-700 md:p-8 w-500px p-12 mt-7'>test</div>
      <Footer />
    </>
  )
}

export default Car
