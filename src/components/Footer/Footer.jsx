import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import Container from '../Container/Container';

import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container modClass={s.footer__container}>
        <p className={s.footer__info}>
          © 2025 | <span className={s.lang__rights_text}>All Rights Reserved</span> |
        </p>
        <p className={s.footer__info}>
          <span className={s.footer__text}> Developed with</span>
          <FaHeart className={s.footer__icon} />
          <span className={s.footer__by_text}>by</span>

          <Link to="https://github.com/BulatovaTati" className={s.footer__link} target="_blanc">
            Tati Bulatova
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
