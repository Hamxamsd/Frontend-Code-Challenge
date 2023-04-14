import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

//Pages
import AppHeader from './components/pages/header';
import Hero from './components/pages/Hero';
import Cart from './components/pages/Cart';
import Products from './components/pages/products';
import AddProducts from './components/pages/addProducts';
import FilterProducts from './components/pages/filterProducts';

function App() {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/add-items" element={<AddProducts />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/checkout" element={<Cart />} />
        <Route exact path="/filter-products" element={<FilterProducts />} />
      </Routes>      
      </main>
    </>
  );
}

export default App;
