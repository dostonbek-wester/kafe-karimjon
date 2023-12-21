import React from "react";
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
