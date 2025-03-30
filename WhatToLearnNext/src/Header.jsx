import AlgoLabLogo from './assets/AlgolabLogo.png';
import profileIcon from './assets/profileIcon.png';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <img src={AlgoLabLogo} alt="logo" className="logo" />

        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Lab</a></li>
            <li><a href="#">Challenges</a></li>
            <li><a href="#">Dashboard</a></li>
          </ul>
        </nav>

        <div className="profile-icon">
          <img src={profileIcon} alt="profile" />
        </div>
      </div>

      {/* Search bar now appears below */}
      <div className="header-search">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
