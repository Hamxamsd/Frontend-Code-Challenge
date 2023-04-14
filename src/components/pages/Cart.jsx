import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Container } from 'react-bootstrap';

const Cart = () => {
  // Get cart items from Redux store
  const carts = useSelector((state) => state.user.cart);


  return (
    <Container>
      <h1 className="text-center my-5">My Cart: {carts.length}</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            {/* <th>Quantity</th> */}
          </tr>
        </thead>
        <tbody>
          {carts?.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              {/* <td>${product.quantity}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;