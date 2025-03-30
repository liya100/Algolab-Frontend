//import picture1 from './assets/picture1.png'

function Card({ image, title, rating }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{rating}</p>
        </div>
    );
}


export default Card 
