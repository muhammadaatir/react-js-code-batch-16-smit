import React, { useContext } from 'react'
import { sum } from '../../App'
import Button from 'react-bootstrap/Button';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { MyContext } from '../../MyContext';

const Header = ({ test, value, updateData }) => {
  // console.log("header props", value.count)
  // updateData("Testing")
  console.log(value)
  const data = useContext(MyContext)
  console.log(data)
  return (
    // <div className='test'>
    //     <div>{value.count}</div>
    //     <button onClick={sum}>123</button>
    //   Header
    // </div>
    // <div>
    //   <Button variant='primary'>Bootstrap Btn</Button>
    // </div>
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
