import React from "react";

function Book(props) {
  const book = props.book
  return (
    <>
      <h3>{book.title}</h3>
      <p>{book.auther}</p>
      <p>{book.pages}</p>
    </>
  );
}

export default Book;
