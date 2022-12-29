import React from 'react';
import '../styles/Header.css'


function Header() {
  return (
    <header className='header'>
      <nav className='nav-header'>
        <a href='/spa-react-redux'>Home</a>
        <div>
          <a href='/spa-react-redux'>Contato</a>
          <a href='/spa-react-redux'>Sobre</a>
        </div>
      </nav>


    </header>
  );
}

export default Header;