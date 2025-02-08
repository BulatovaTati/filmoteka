import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

import s from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className={s.scrolltop__btn}>
        <FaArrowCircleUp className={s.scrolltop__icon} />
      </button>
    )
  );
};

export default ScrollToTop;
