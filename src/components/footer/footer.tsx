import logo from '../../assets/logo.png';
import './footer.css';
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logo} alt="" className="footer__logo" />
        <p className="footer__license">Data provided by Marvel. © 2024 MARVEL</p>
        <a target="blank" href="https://developer.marvel.com/" className="footer__link">
          developer.marvel.com
        </a>
      </div>
    </footer>
  );
};