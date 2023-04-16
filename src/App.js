// Import necessary dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner} from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

// Import components for each page
import AppHeader from "./components/pages/header";
import Hero from "./components/pages/Hero";
import Cart from "./components/pages/Cart";
import AddProducts from "./components/pages/addProducts";
import FilterProducts from "./components/pages/filterProducts";
import Register from "./components/pages/Authentication/Register";

import React, { Suspense} from "react";

const Products = React.lazy(() => import("./components/pages/products"));

function App() {
  // Check if user data exists in local storage
  const hasUser = localStorage.getItem("user");

  return (
    <>
      {/* Render the app header */}
      <header>
        <AppHeader />
      </header>

      {/* Render the main content */}
      <main>
        {/* Define the routes for each page */}
        <Suspense fallback={<><Spinner animation="grow" /></>}>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/products" element={<Products />} />

          {/* If user data exists, allow access to the following routes */}
          {hasUser && (
            <>
              <Route exact path="/add-items" element={<AddProducts />} />
              <Route exact path="/checkout" element={<Cart />} />
            </>
          )}

          {/* If no user data exists, redirect to the register page */}
          {!hasUser && <Route exact path="/signup" element={<Register />} />}

          <Route exact path="/filter-products" element={<FilterProducts />} />
        </Routes>
        </Suspense>
      </main>
    </>
  );
}

// Export the App component
export default App;
