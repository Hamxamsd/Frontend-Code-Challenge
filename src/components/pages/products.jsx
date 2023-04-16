import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';

const Products = () => {
  // Use useDispatch hook to access dispatch function
  const dispatch = useDispatch();

  // Initialize products state as an empty array
  const [products, setProducts] = useState([]);

  // Fetch products data from API endpoint and update products state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/items');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Render the products as cards in a grid layout
  return (
    <div className="container">
      <h1 className="text-center my-5">Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card h-100 text-center">
              <img src={product.img} alt={product.name} className="card-img-top mx-auto" style={{width: "150px", height: "150px"}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text mt-auto">${product.price}</p>
                <button className="btn btn-dark mt-auto"
                  // Dispatch AddCart action on button click with selected product as parameter
                  onClick={() => dispatch(AddCart(product))} 
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
