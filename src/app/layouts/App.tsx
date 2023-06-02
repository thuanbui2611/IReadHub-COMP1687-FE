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
      <Route exact path="/book-detail" component={BookDetails} />
      <Route exact path="/books" component={Books} />
    </>
  );
}

export default App;
