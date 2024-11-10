import React from 'react';
import './Header.css'; // Adjust the path if necessary

const Header = () => {
  const handleBackClick = () => {
    window.history.back(); // Go back to the previous page in history
  };

  return (
    <header className="header">
      <button onClick={handleBackClick} className="back-icon"> {/* Make the back icon a button */}
        <i className="fas fa-arrow-left"></i>
      </button>
      <img src="/cit-logo2.png" alt="CITU Logo2" className="logo2-image" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Pagbasa">PAGBASA AT PAGSULAT SA IBA’T IBANG DISCIPLINA</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
