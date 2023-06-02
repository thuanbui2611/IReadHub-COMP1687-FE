import { useState, useEffect } from "react";
import { Book } from "../../app/models/book";
import BookList from "./BookList";

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <BookList books={books} />
        </div>
      </div>
    </>
  );
}
