import React from 'react';
import './index.css';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="searchbar-wrapper">
        <Search className="search-icon" size={16} />
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
