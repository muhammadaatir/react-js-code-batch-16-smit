import React from 'react'
import { useParams } from 'react-router';

const Product = () => {
    let params = useParams();
    console.log(params.title)
  return (
    <div>
      test product
    </div>
  )
}

export default Product
