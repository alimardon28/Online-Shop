import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.svg'
import '../Components/Header.css'
import { Context } from '../Context/langContext';
import { useContext } from 'react';

const Header = () => {

    const  {product} = useContext(Context)
    const {korzinka} = useContext(Context)

    return (
        <>
          <header className='header'>
              <nav className='nav'>
                  <NavLink className='nav-link'  to="/">
                      <img className='nav-logo' src={logo} alt="logo img" />
                  </NavLink>

                  <ul className='list'>
                      <li className='item'>
                         <NavLink to="/selected" className='item__link' href="/"><i className='bi bi-heart'></i><span>{product.length}</span></NavLink>
                      </li>
                      <li className='item'>
                         <NavLink to="/card" className='item__link' href="/"><i className='bi bi-cart3'></i> <span>{korzinka.length}</span></NavLink>
                      </li>
                  </ul>
              </nav>
          </header>

        </>

    );
}

export default Header;
