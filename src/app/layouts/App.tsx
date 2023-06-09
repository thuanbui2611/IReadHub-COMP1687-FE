import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import "./../../styles.css";
import Header from "./Header";
import BookDetails from "../../features/books/BookDetails";
import Books from "../../features/books/Books";

import "flowbite";
import Footer from "./Footer";
import Cart from "../../features/cart/Cart";
import { useState } from "react";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/books" component={Books} />
      <Route path="/book-detail/:id" component={BookDetails} />
      <Route exact path="/my-cart" component={Cart} />
      <Footer />
    </div>
  );
}

export default App;
