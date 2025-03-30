import Card from './Card'; 
import image7 from './assets/image7.png'; 
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';
import image10 from './assets/image10.png';
import image11 from './assets/image11.png';
import image12 from './assets/image12.png';


function CardList() {
    

    const myLearning = [
        { id: 1, image: image7, title: "Linked List", rating: "⭐4.9", progress:"%60 complete "},
        { id: 2, image: image8, title: "Stack", rating: "⭐4.7", progress:"%91 complete "},
        { id: 3, image: image9, title: "Queue", rating: "⭐4.8", progress:"%23 complete "},
        { id: 4, image: image10, title: "Array", rating: "⭐4.5", progress:"%10 complete " },
        { id: 5, image: image11, title: "Graphs", rating: "⭐4.6", progress:"%84 complete " },
        { id: 6, image: image12, title: "Hash Function", rating: "⭐4.5", progress:"%42 complete " },
    ];
    

    return (

        <div className="card-container">
            {myLearning.map((card) => (
                <Card key={card.id} image={card.image} title={card.title} rating={card.rating} progress={card.progress} />
            ))}
        </div>
        
    );
}

export default CardList;
