import React from 'react';
import { Navbar,Nav,Container, Form, FormControl } from 'react-bootstrap';
import { NavWrapper,StyledComponents} from './style';
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'

const Navbars = () => {
  return (
      <NavWrapper>
    <Navbar  expand="lg">
  <Container>
   <Link to={'/'}><img src='/Images/logo.svg'/></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Form className="d-flex search-bar">
        <BsSearch />
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <Nav className="mx-auto">
        <Link to={'/'} className='nav-link'>Home</Link>
        <Link to={'/movies'} className='nav-link'>Tv Shows</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</NavWrapper>
  )
}

export default Navbars