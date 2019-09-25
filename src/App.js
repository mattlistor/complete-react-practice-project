import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends React.Component {
  state = {
    books: [],
    bookshelf: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(function(response) {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        books: myJson,
      })
    });  
  }

  componentDidUpdate(){
    fetch('http://localhost:3005/books')
    .then(function(response) {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        books: myJson,
      })
    });
  }

  addBook = (book) => {
    fetch(`http://localhost:3005/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(book)
    }).then(res => res.json())
    .then(res => {
      let newArray = [...this.state.books]
      let index = newArray.findIndex(b => b.id === book.id)
      newArray[index] = res
      this.setState({
        books: newArray
      })
    })   
  }

  submitComment = (book) => {
    // console.log(book)

    fetch(`http://localhost:3005/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(book)
    }).then(res => res.json())
    .then(res => {
      let newArray = [...this.state.books]
      let index = newArray.findIndex(b => b.id === book.id)
      newArray[index] = res
      this.setState({
      books: newArray
      })
    })   
  }

  addToBookShelf = (book, onShelf) => {
    console.log(book, onShelf)    

    let newArray = [...this.state.bookshelf]
    newArray.push(book)
    //HOW DO I MAKE THIS A UNIQUE ARRAY
    this.setState({
      bookshelf: newArray
    })
  }

  removeFromBookShelf = (book) => {
  let newArray = [...this.state.bookshelf].filter((b) => b.id !== book.id)

  this.setState({
    bookshelf: newArray
  })
  }

  render(){
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBook={this.addBook} submitComment={this.submitComment} addToBookShelf={this.addToBookShelf}/>
        <Bookshelf books={this.state.bookshelf} removeFromBookShelf={this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
