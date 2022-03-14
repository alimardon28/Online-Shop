import React from 'react';
import logo from '../assets/img/logo.svg'
import '../Components/Header.css'

const Header = () => {
    return (
        <>
          <header className='header'>
              <nav className='nav'>
                  <a className='nav-link' href="/">
                      <img className='nav-logo' src={logo} alt="logo img" />
                  </a>

                  <ul className='list'>
                      <li className='item'>
                         <a className='item__link' href="/"><i className='bi bi-heart'></i><span>0</span></a>
                      </li>
                      <li className='item'>
                         <a className='item__link' href="/"><i className='bi bi-cart3'></i> <span>0</span></a>
                      </li>
                  </ul>
              </nav>
          </header>

        </>

    );
}

export default Header;
