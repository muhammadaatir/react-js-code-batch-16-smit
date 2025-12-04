import axios from 'axios'
import React, { useEffect, useState } from 'react'

const About = () => {
  const [value, setValue] = useState(0)
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then(
  //     (response) => {
  //       console.log(response)
  //     }
  //   ).catch((error) => {
  //     console.log(error)
  //   })
  // }, [])

  useEffect(() => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: 'foo',
      body: 'bar',
      userId: 12,
    }).then(
      (response) => {
        console.log(response)
      }
    ).catch((error) => {
      console.log(error)
    })
  })
  console.log(value)
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>test</button>
      <h1>About</h1>
    </div>
  )
}

export default About
