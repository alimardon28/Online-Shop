import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import '../Footer/Footer.css'
import page from '../../localization/Content';
import { Context } from '../../Context/langContext';

const Footer = ({children}) => {

    const {lang , setLang} = useContext(Context);


    return (
        <>

          <footer className="footer">
              <div className="footer__box">
                  <ul>
                      <li>
                          <NavLink to="/">
                              <img src={logo} alt="logo img" />
                          </NavLink>
                      </li>
                      <li>
                          <p>lorem</p>
                          <p>lorem</p>
                          <p>lorem</p>
                      </li>
                      <li>
                          <p>loremm</p>
                          <select defaultValue={lang} onChange={e => setLang(e.target.value)}>
                              <option value="uz">uz</option>
                              <option value="ru">ru</option>
                              <option value="eng">eng</option>
                          </select>
                      </li>
                      <li>
                          <span><i className="bi bi-wordpress"></i></span>
                          <span><i className="bi bi-instagram"></i></span>
                          <span><i className="bi bi-telegram"></i></span>
                          <span><i className="bi bi-whatsapp"></i></span>
                      </li>
                  </ul>
              </div>
           {page[lang].footer} {children}
          </footer>

        </>
    );
}

export default Footer;
