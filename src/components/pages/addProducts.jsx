import React, { useState } from 'react';

const AddProducts = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, img })
      });
      setName(name);
      setPrice(price);
      setImg(img);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={event => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" className="form-control" id="price" value={price} onChange={event => setPrice(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="img">Image URL</label>
          <input type="text" className="form-control" id="img" value={img} onChange={event => setImg(event.target.value)} />
        </div>
        <button type="submit" className="btn btn-dark mt-2">Submit</button>
      </form>
    </div>
  );
};

export default AddProducts;