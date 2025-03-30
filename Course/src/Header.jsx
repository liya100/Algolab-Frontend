import AlgoLabLogo2 from './assets/AlgolabLogo2.png';

function Header() {
    return (
      <header className="header">
        <img src={AlgoLabLogo2} alt="logo" className="logo" />
  
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#">Linked List</a></li>
            <li><a href="#">⭐Leave a rating</a></li>
            <li><a href="#">◕Your Progress</a></li>
            <li><a href="#">🔗Share</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  

export default Header