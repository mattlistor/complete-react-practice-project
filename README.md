## Deliverables

The database of books can be found in a JSON-server. If you haven't already done so install json-server:

`TO INSTALL: npm install -g json-server`

Then start the json-server:

`TO START: json-server --watch db.json`

*Your task is to read the deliverables below, read and understand the source code, work through any errors, make the additions/changes necessary to hit all of the deliverables*

- Fetch to `http://localhost:3005/books`. You should get a response that is an array of multiple book objects that look like this:

   `{
   "id": 1,
   "title": "The Great Gatsby",
   "author": "F. Scott Fitzgerald",
   "img": "https://mppl.org/wp-content/uploads/0-214x300.jpg",
   "comments": []
   }`

- //Render a list of books in the `BookList` that show the book title, book img, a button to add a comment, and a button to show all comments
- //Add a form that allows the user to, optimistically, add a book to the Book List
- ***A User should be able to search Book Shelf for a book by title
- //When a User clicks the add comment button it should create a text box that allows the user to, optimistically, add a comment for that book
- //When a User clicks the show comment button it should show all comments for that book
- //Clicking on the book img in the Book List should add it to the Book Shelf
- //Clicking on a book img in the Book Shelf should remove it from the Book Shelf
- //Each book can only be added to Book Shelf one time (Book Shelf should not have duplicate books)
