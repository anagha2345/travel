import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

function Header() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/htRvXHWQ/images-1-removebg-preview.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           Wanderer
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header