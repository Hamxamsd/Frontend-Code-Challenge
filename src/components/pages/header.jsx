import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const AppHeader = () => {
  const numberOfCartsItems = useSelector((state) => state.user.cart);

  return (
        <Navbar className='p-2 ' bg="dark" variant='dark' expand="lg">
          <Navbar.Brand as={Link} to="/">RandoStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/"><HomeIcon/></Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/add-items"><AddCircleIcon/></Nav.Link>
              <Nav.Link as={Link} to="/filter-products">Filter-Products</Nav.Link>
              <Nav.Link as={Link} to="/checkout">
              <Badge badgeContent={numberOfCartsItems.length} color="primary">
              <AddShoppingCartIcon />
              </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  );
};

export default AppHeader;