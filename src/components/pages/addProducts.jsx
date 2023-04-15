import React, { useState } from 'react';

const AddProducts = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    
    try {
      // Sends a POST request to the server to add the new product
      await fetch("http://localhost:5000/items", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, img })
      });

      // Resets the input fields after the form is submitted
      setName('');
      setPrice('');
      setImg('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Add Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for product name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={name} 
            onChange={event => setName(event.target.value)} 
            required // Makes the field required
          />
        </div>

        {/* Input field for product price */}
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input 
            type="number" 
            className="form-control" 
            id="price" 
            value={price} 
            onChange={event => setPrice(event.target.value)} 
            required // Makes the field required
          />
        </div>

        {/* Input field for product image URL */}
        <div className="form-group">
          <label htmlFor="img">Image URL</label>
          <input 
            type="text" 
            className="form-control" 
            id="img" 
            value={img} 
            onChange={event => setImg(event.target.value)} 
            required // Makes the field required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-dark mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
