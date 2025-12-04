import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Card from '../components/Card'

const Categories = () => {
    const [value, setValue] = useState()

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(response.ok) {
      const result = response.json()
      return result

    } else {
      console.error(error)
    }
  }
  useEffect(async () => {
    const data = await fetchData();
    setValue(data)

  }, [])
  const blogs = [
    {
      "id": 1,
      "title": "The Future of Frontend Development in 2025",
      "description": "Exploring key trends and technologies shaping frontend development, including the rise of signals and the evolution of frameworks like React, Vue, and Svelte."
    },
    {
      "id": 2,
      "title": "A Beginner's Guide to GraphQL",
      "description": "An introduction to GraphQL, covering its core concepts, benefits over traditional REST APIs, and a simple tutorial to get started with Apollo Server."
    },
    {
      "id": 3,
      "title": "Mastering CSS Grid Layouts",
      "description": "Dive deep into CSS Grid. Learn how to create complex, responsive layouts with ease, using practical examples and best practices for modern web design."
    },
    {
      "id": 4,
      "title": "Why TypeScript is Essential for Large-Scale Projects",
      "description": "Discussing the benefits of using TypeScript, such as improved code quality, better tooling, and catching errors at compile time rather than runtime."
    },
    {
      "id": 5,
      "title": "Demystifying Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
      "description": "A clear explanation of how asynchronous operations work in JavaScript, comparing callbacks, Promises, and the modern async/await syntax."
    },
    {
      "id": 6,
      "title": "Optimizing Web Performance: A Checklist",
      "description": "A practical checklist of techniques to improve your website's performance, covering image optimization, lazy loading, code splitting, and caching strategies."
    },
    {
      "id": 7,
      "title": "Understanding the React useState Hook",
      "description": "A comprehensive guide to the useState hook in React, explaining how to manage state in functional components with examples."
    },
    {
      "id": 8,
      "title": "Building Accessible Websites (WCAG Compliance)",
      "description": "Learn the importance of web accessibility and how to build inclusive websites that comply with WCAG standards, benefiting all users."
    },
    {
      "id": 9,
      "title": "Introduction to Docker for Developers",
      "description": "Get started with Docker: learn how containers simplify development workflows, ensuring consistency across different environments from local to production."
    },
    {
      "id": 10,
      "title": "Python for Data Science: Libraries and Tools",
      "description": "An overview of the essential Python libraries for data science, including NumPy, Pandas, Matplotlib, and Scikit-learn, and their applications."
    }
  ]

  return (
    <div>
      {/* <button onClick={() => setValue(value + 1)}>test</button> */}
      Categories
      <Outlet />
      {
        value?.slice(0, 10)?.map((blog, index) => {
          return (
            <Card title={blog.title} key={blog.id} id={blog.id}  />
          )
        })
      }
    </div>
  )
}

export default Categories
