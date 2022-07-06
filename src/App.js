import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyles";
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import { productData } from './components/Products/data'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favourite' data={productData} />
    </Router>
  );
}

export default App;
