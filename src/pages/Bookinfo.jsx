import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Components/ui/Rating";
import Price from "../Components/ui/Price";

const BookInfo = ({ books }) => {
      const { id } = useParams();
      const book = books.find(book => +book.id === +id);
      
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the Coding Interview{" "}
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={20} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary__para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, voluptatem incidunt voluptatum facilis ratione
                    deserunt architecto sed, aut numquam ut, sit dolorum
                    deleniti quisquam quis maiores nihil. Alias eos nobis esse
                    repellat ipsam natus, ipsa quam numquam quae, iusto veniam.
                  </p>
                  <p className="book__summary__para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, voluptatem incidunt voluptatum facilis ratione
                    deserunt architecto sed, aut numquam ut, sit dolorum
                    deleniti quisquam quis maiores nihil. Alias eos nobis esse
                    repellat ipsam natus, ipsa quam numquam quae, iusto veniam.
                  </p>
                </div>
                <button className="btn">
                    Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
