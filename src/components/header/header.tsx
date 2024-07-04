import logo from '../../assets/logo.png';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__content">
          <Link to ="/">
            <img src={logo} alt="marvel" className="header__logo"/>
          </Link>
          <nav id="navigation" className="header__links">
            <NavLink to="/characters" className="header__link">
              Characters
            </NavLink>
            <NavLink to="/comics" className="header__link">
              Comics
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};