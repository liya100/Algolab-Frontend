
function Card({ image, title, rating, progress }) {
    const percent = parseInt(progress.replace(/\D/g, ''));
  
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{rating}</p>
  
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent}%` }}></div>
        </div>
  
        <p className="progress-text">{progress}</p>
      </div>
    );
  }
  
  export default Card;
  