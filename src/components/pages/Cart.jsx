import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Container } from 'react-bootstrap';

const Cart = () => {
  // Get cart items from Redux store
  const carts = useSelector((state) => state.cart.cart);

  return (
    <Container>
      {/* Heading with total number of cart items */}
      <h1 className="text-center my-5">My Cart: {carts.length}</h1>
      {/* Table to display cart items */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through cart items and display each item in a row */}
          {carts?.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
