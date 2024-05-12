import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../Assets/icons/instagram.svg';
import whatsapp from '../../Assets/icons/whatsapp.svg';
import facebook from '../../Assets/icons/facebook-f.svg';
import linkedin from '../../Assets/icons/linkedin-in.svg';
import twitter from '../../Assets/icons/twitter.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <>
          <footer className="footer">
            <div className="container">
              <div className="footer-wrapper">
                <div className="bottom-footer">
                  <div className="bottom-foote-row">
                    <p className="text">&copy; 2024 <span>Raheel Ghafoor.</span> All right reserved.</p>
                    <ul className="menu-items">
                      <li className="menu-item">
                        <Link to='/'>
                          <img src={instagram} alt="instagram" />
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to='/'>
                          <img src={whatsapp} alt="whatsapp" />
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to='/'>
                          <img src={twitter} alt="twitter" />
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to='/'>
                          <img src={facebook} alt="facebook" />
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to='/'>
                          <img src={linkedin} alt="linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}

export default Footer