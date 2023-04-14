import React, { useState, useEffect } from "react";
import { Form, Button, Table, Alert } from "react-bootstrap";

const FilterProducts = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/items");
        const data = await response.json();
        setProducts(data);
        setAllProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (event) => {
    event.preventDefault();
    if (filterName) {
      const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(filterName.toLowerCase())
      );
      if (filteredProducts.length === 0) {
        setErrorMessage(`No products found with name: ${filterName}`);
      } else {
        setErrorMessage("");
        setProducts(filteredProducts);
      }
    } else {
      setErrorMessage("");
      setProducts(allProducts);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Filter Products</h1>
      <Form
        inline
        onSubmit={handleFilter}
        className="justify-content-center mb-4"
      >
        <Form.Label htmlFor="filterName" srOnly>
          Filter by Name
        </Form.Label>
        <Form.Control
          type="text"
          id="filterName"
          placeholder="Filter by Name"
          value={filterName}
          onChange={(event) => setFilterName(event.target.value)}
          className="mr-sm-2"
        />
        <Button type="submit" variant="outline-primary mt-2">
          Filter
        </Button>
      </Form>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FilterProducts;
