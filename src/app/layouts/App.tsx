import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import "./../../styles.css";
import Header from "./Header";
import BookDetails from "../../features/books/BookDetails";
import Books from "../../features/books/Books";

import "flowbite";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/books" component={Books} />
      <Route path="/book-detail/:id" component={BookDetails} />
    </>
  );
}

export default App;
