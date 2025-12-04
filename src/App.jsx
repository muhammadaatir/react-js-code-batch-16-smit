import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';

export function sum() {
  console.log("testing")
}
function App() {
  // const [count, setCount] = useState("testffgf")
  // let [value, setValue] = useState(0)
  // let a = 0
  // useEffect(() => {/// value++ ==> value = value + 1
  //   console.log(a)
  //   console.log(count)

  // }, [value])
  // const Func = () => {
  //   inputRef.current.focus()

  // }
  // const inputRef = useRef()
  // console.log(value)
  // let content; 
  // if (value?.length >= 3) {
  //   content = <button>{count}</button>
  // }
  // const arr = [{ name: "test1", id: 1 }, { name: "test2", id: 2 }, { name: "test3", id: 3 }]
//   const expensiveCalculation = (num) => {
//     for (let i = 0; i < 10000; i++) {
//       console.log(num)
//     num += 1;
//   }
//   return num;
// };
// console.log(value)
//   const calculation = useMemo(() => expensiveCalculation(value), [value])
const [value, setValue] = useState()
console.log(value)
  return (
    <>
    Index page
    <br />
    {/* <button onClick={() => setValue(() => value++)}>test</button>
    {calculation} */}
      {/* <label htmlFor="">Name</label>
      <input type="text" className='border-3 border-red-600' onChange={(event) => setValue(event.target.value)} /> */}
      {/* {
        value?.length == 3
        ? <button>Submit</button>
        : <p>Enter a proper name</p>
      } */}
      {/* {content} */}
      {/* {arr.map((obj, index) => {
        return (
          <div key={index} className='flex gap-4'>
            <div className='flex'>
              <p>{index == 1 ? "S No.:" : "ID:"}</p>
              <p>{obj.id}</p>
            </div>
            <div className='flex'>
              <p>Name:</p>
              <p>{obj.name} {obj.name == "test1" && "saylani"}</p>
            </div>
          </div>
        )
      })}
      {
        value
      }
      {count} */}
      <Link to="/about">
      Go to about page
      </Link>
      <br />
      <input className='border' onChange={(event) => setValue(event.target.value)} type="text" />
    </>
  )
}

export default App
