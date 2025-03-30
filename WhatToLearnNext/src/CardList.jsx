import { useState } from 'react';
import Card from './Card';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';
import image10 from './assets/image10.png';
import image11 from './assets/image11.png';
import image12 from './assets/image12.png';

function CardList() {
  const recommended = [
    { id: 1, image: image1, title: "Introduction to Data Structures and Algorithms", rating: "⭐4.7" },
    { id: 2, image: image2, title: "Step into the World of Data Structures and Algorithms", rating: "⭐4.8" },
    { id: 3, image: image3, title: "Introduction to AlgoLab", rating: "⭐4.9" },
    { id: 4, image: image4, title: "Examples of Data Structures and Algorithms", rating: "⭐4.2" },
    { id: 5, image: image5, title: "Application of Data Structures and Algorithms", rating: "⭐4.2" },
    { id: 6, image: image6, title: "Python Data Structures and Algorithms", rating: "⭐4.6" }
  ];

  const becauseYouViewed = [
    { id: 7, image: image7, title: "Linked List", rating: "⭐4.9" },
    { id: 8, image: image8, title: "Stack", rating: "⭐4.7" },
    { id: 9, image: image9, title: "Queue", rating: "⭐4.8" },
    { id: 10, image: image10, title: "Array", rating: "⭐4.5" },
    { id: 11, image: image11, title: "Graphs", rating: "⭐4.6" },
    { id: 12, image: image12, title: "Hash Function", rating: "⭐4.5" }
  ];

  const cardsPerPage = 4;
  const [recStart, setRecStart] = useState(0);
  const [viewedStart, setViewedStart] = useState(0);

  const handleNext = (type) => {
    if (type === "rec") {
      setRecStart(prev => Math.min(prev + cardsPerPage, recommended.length - cardsPerPage));
    } else {
      setViewedStart(prev => Math.min(prev + cardsPerPage, becauseYouViewed.length - cardsPerPage));
    }
  };

  const handlePrev = (type) => {
    if (type === "rec") {
      setRecStart(prev => Math.max(prev - cardsPerPage, 0));
    } else {
      setViewedStart(prev => Math.max(prev - cardsPerPage, 0));
    }
  };

  return (
    <div className="card-section">
      <h1 className="main-title">What to learn next</h1>

      {/* Recommended Section */}
      <h2 className="section-title">Recommended for you</h2>
      <div className="carousel">
        {recStart > 0 && (
          <button className="arrow-btn" onClick={() => handlePrev("rec")}>
            &#8592;
          </button>
        )}
        <div className="card-container">
          {recommended.slice(recStart, recStart + cardsPerPage).map(card => (
            <Card key={card.id} image={card.image} title={card.title} rating={card.rating} />
          ))}
        </div>
        {recStart + cardsPerPage < recommended.length && (
          <button className="arrow-btn" onClick={() => handleNext("rec")}>
            &#8594;
          </button>
        )}
      </div>

      {/* Because You Viewed Section */}
      <h2 className="section-title">
        Because you viewed <span className="highlight">"Tree Data Structures"</span>
      </h2>
      <div className="carousel">
        {viewedStart > 0 && (
          <button className="arrow-btn" onClick={() => handlePrev("viewed")}>
            &#8592;
          </button>
        )}
        <div className="card-container">
          {becauseYouViewed.slice(viewedStart, viewedStart + cardsPerPage).map(card => (
            <Card key={card.id} image={card.image} title={card.title} rating={card.rating} />
          ))}
        </div>
        {viewedStart + cardsPerPage < becauseYouViewed.length && (
          <button className="arrow-btn" onClick={() => handleNext("viewed")}>
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
}

export default CardList;
