import React, { Component } from "react";
import Form from "../components/Form";
import Book from "../components/Book";

const BookList = ({ books, addBook, submitComment, addToBookShelf }) => {
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form addBook={addBook}/>
      <ul>{books.map((b) => <Book book={b} key={b.id} submitComment={submitComment} addToBookShelf={addToBookShelf} shelf={false}/>)}</ul>
    </div>
  );
}

export default BookList;
