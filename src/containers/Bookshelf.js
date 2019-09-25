import React from "react";
import Book from "../components/Book";

const Bookshelf = ({ books, removeFromBookShelf }) => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books.map((b) => <Book book={b} removeFromBookShelf={removeFromBookShelf} shelf={true}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
