import AlgoLabLogo2 from './assets/AlgolabLogo2.png';
import { useState } from "react";

function Header() {
  const [active, setActive] = useState("All Courses");

  const links = ["All Courses", "My Lists", "Archieved", "Lab", "Challenges"];

  return (
    <header className="header">
      <div className="left-content">
        <h1 className="header-title">My Learning</h1>
        <nav className="nav">
          <ul className="nav-links">
            {links.map((link) => (
              <li
                key={link}
                className={`nav-item ${active === link ? "active" : ""}`}
                onClick={() => setActive(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="right-content">
        <img src={AlgoLabLogo2} className="logo" />
      </div>
    </header>
  );
}

export default Header;
