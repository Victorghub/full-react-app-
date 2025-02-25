import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Price from "./Price";

const Book = ({ books }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating}/>
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
    </div>
  );
};

export default Book;
