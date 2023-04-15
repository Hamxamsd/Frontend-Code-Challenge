import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const AppHeader = () => {
  // Get the number of items in the cart from the Redux store
  const numberOfCartsItems = useSelector((state) => state.cart.cart);

  // Get the user data from local storage
  let user = JSON.parse(localStorage.getItem('user'));

  // Create a navigate function using the useNavigate hook
  const navigate = useNavigate();

  // Function to handle logging out
  const logOut = () => {
    // Clear the local storage
    localStorage.clear();
    // Navigate to the sign up page
    navigate('/signup');
    // Reload the page to update the header
    window.location.reload();
  };

  return (
    <Navbar className='p-2 ' bg="dark" variant='dark' expand="lg">
      {/* Navbar brand */}
      <Navbar.Brand as={Link} to="/">RandoStore</Navbar.Brand>

      {/* Navbar toggle button */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Navbar items */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* Home link */}
          <Nav.Link as={Link} to="/"><HomeIcon/></Nav.Link>

          {/* Products link */}
          <Nav.Link as={Link} to="/products">Products</Nav.Link>

          {/* Filter products link */}
          <Nav.Link as={Link} to="/filter-products">Filter-Products</Nav.Link>

          {/* Add product and cart links (only visible when user is logged in) */}
          {localStorage.getItem('user') ? 
            <>
              <Nav.Link as={Link} to="/add-items">Add <AddCircleIcon/> Product</Nav.Link>
              <Nav.Link as={Link} to="/checkout">
                <Badge badgeContent={numberOfCartsItems.length} color="primary">
                  <AddShoppingCartIcon />
                </Badge>
              </Nav.Link>
            </>
            :
            <Nav.Link as={Link} to="/signup">Register</Nav.Link>
          }
        </Nav>

        {/* User dropdown (only visible when user is logged in) */}
        {localStorage.getItem('user')?
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}>LogOut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :null
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppHeader;