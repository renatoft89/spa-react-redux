import React from 'react';
import '../styles/Header.css'


function Header() {
  return (
    <header className='header'>
      <nav className='nav-header'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </nav>


    </header>
  );
}

export default Header;