import { useRef } from "react";

function CardSlider({ cards }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300; // pixels to scroll
    scrollRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-wrapper">
      <button className="scroll-btn" onClick={() => scroll("prev")}>◀</button>

      <div className="card-slider" ref={scrollRef}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            {/* Add card content */}
          </div>
        ))}
      </div>

      <button className="scroll-btn" onClick={() => scroll("next")}>▶</button>
    </div>
  );
}

export default CardSlider;
