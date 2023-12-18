import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
function Footer() {
  return (
    <div>
        <Navbar className="bg-dark shadow">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <p>All Rights Reserved: Resto Cafe &copy; restocafe</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
    
  )
}

export default Footer