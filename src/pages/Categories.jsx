import React, { useEffect, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router'
import Card from '../components/Card'
import { Avatar, List, Skeleton, Watermark } from 'antd';
import image from '../assets/car.jpeg'

const Categories = () => {
  const [value, setValue] = useState()
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("title"))
  // setSearchParams("?tab=12")
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (response.ok) {
      const result = response.json()
      return result

    } else {
      console.error(error)
    }
  }
  useEffect(async () => {
    const data = await fetchData();
    // setTimeout(() => {
      setValue(data)
    // }, 1000)

  }, [])
  console.log(value)
  return (
    <>
      <Watermark
        height={50}
        width={130}
        rotate={0}
        zIndex={200}
        // image="/src/assets/car.jpeg"
        content={"smit"}
        font={{color: "red"}}
      >
        {/* <div style={{ height: 500 }} /> */}
        {value ?
          <div>
            {/* <button onClick={() => setValue(value + 1)}>test</button> */}
            Categories
            <Outlet />
            {
              value?.slice(0, 10)?.map((blog, index) => {
                return (
                  <Card title={blog.title} key={blog.id} id={blog.id} />
                )
              })
            }
          </div> : <Skeleton active avatar>
            <List.Item.Meta
              avatar={<Skeleton.Avatar shape={'square'} size={"large"} />}
              title={<a href={""}></a>}
              description={""}
            />
          </Skeleton>}

        {/* <img src={'/src/assets/car.jpeg'} /> */}
        <img src={image} />
      </Watermark>

    </>
  )
}

export default Categories
