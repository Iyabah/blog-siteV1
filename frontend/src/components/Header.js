import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white">
    <div className="container d-flex justify-content-between align-items-center py-3">
    <h1 className="h4 mb-0">
      <a href="/" className="text-white text-decoration-none">Said's Blog</a>
    </h1>
        
        {/* Desktop Navigation */}
        <nav className="d-none d-md-flex gap-3">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
          <a href="/signin" className="nav-link">Sign In</a>
        </nav>
        
      {/* Hamburger Menu Button (Mobile) */}
<button 
  className="d-md-none border-0 bg-transparent"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  <div className="hamburger-menu">
    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
  </div>
</button>
      </div>
      
    
    </header>
  );
}

export default Header;























/*####Default#

function Header() {
    return (
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1>Blog Site</h1>
        
      </header>
    );
  }
  export default Header;
  */