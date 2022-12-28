import React from 'react';
import '../styles/Header.css'


function Header() {
  return (
    <header className='header'>
      <nav className='nav-header'>
        <a href='/'>Home</a>
        <div>
          <a href='/'>Contato</a>
          <a href='/'>Sobre</a>
        </div>
      </nav>


    </header>
  );
}

export default Header;