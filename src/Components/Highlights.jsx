import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faTags, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="purple">Library?</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon={faBolt} />}
                        title="Easy and Quick"
                        para="Get access to the book you purchase instantly."
                        />
                        <Highlight icon={<FontAwesomeIcon icon={faTags} />}
                        title="Affordable"
                        para="Get your hands on popular books for as little as €10!"
                        />
                        <Highlight icon={<FontAwesomeIcon icon={faBookOpen} />}
                        title="10'000+ books"
                        para="Library has books in all your favorite categories."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Highlights;
