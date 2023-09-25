import React from "react";
import Book from "./Book";

function RenderingLists() {
  const bookList = [
    "to kill a mockingbird",
    "the great getsby",
    "the catcher in the rye",
  ];

  const books = [
    {
      title: "to kill a mockingbird",
      auther: "harper lee",
      pages: 250,
    },
    {
      title: "the great gatsby",
      auther: "f. scott fitzgerald",
      pages: 250,
    },
    {
      title: "the catcher in the rye ",
      auther: "harper lee",
      pages: 250,
    },
  ];

  return (
    <div>
      {bookList.map((book) => {
        return <h2 key={book}>{book}</h2>;
      })}

{/* Component in the same file */}
    <hr />
      {books.map(book => {
        return (
            <div key={book.title}>
                <h3>{book.title}</h3>
                <p>{book.auther}</p>
                <p>{book.pages}</p>
            </div>
        )
      })}

 {/* Using seprate file component */}

      <hr />
      {books.map((book) => {
        return <Book key={book.title} book={book} />;
      })}
    </div>
  );
}

export default RenderingLists;
