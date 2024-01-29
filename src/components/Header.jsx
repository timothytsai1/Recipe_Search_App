import { useState } from 'react';

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    handleSearch(searchTerm);
    setSearchTerm('');
  };
  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>Banger</span> Food
        </h1>
        <p className="header-description">
          Discover culinary delights with our recipe finder. Explore diverse
          cuisines, find step-by-step instructions, and create delicious meals
          effortlessly.
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Find a recipe..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleClick();
              }
            }}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
