import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import '../Footer/Footer.css'
import { Context } from '../../Context/langContext';

const Footer = () => {

    const {lang , setLang} = useContext(Context);


    return (
        <div id='footer'>

          <footer className="footer">
              <div className="footer__box">
                  <ul>
                      <li>
                          <NavLink to="/">
                              <img src={logo} alt="logo img" />
                          </NavLink>
                      </li>
                      <li>
                          <p><NavLink id='favorites' to="/selected">Favorites</NavLink></p>
                          <p><NavLink id='basket' to="/card">Basket</NavLink></p>
                          <p><NavLink id='contacts' to="/cantacts">Contacts</NavLink></p>
                      </li>
                      <li>
                         <p> <NavLink className="nav" to="/servicesrequirements">Terms of service</NavLink></p>
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
          </footer>

        </div>
    );
}

export default Footer;
