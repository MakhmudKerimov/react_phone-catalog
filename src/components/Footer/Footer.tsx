import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <Link to="/.github/" className={styles.logoLink}>
        <img src="/img/Logo.svg" alt="Logo" />
      </Link>

      <nav className={styles.nav}>
        <Link
          to="https://github.com/MakhmudKerimov/react_phone-catalog"
          target="_blank"
          className={styles.navBtn}
          rel="noreferrer"
        >
          Github
        </Link>
        <Link to="#" className={styles.navBtn}>
          Contacts
        </Link>
        <Link to="#" className={styles.navBtn}>
          rights
        </Link>
      </nav>

      <div className={styles.backToTopPanel}>
        <div className={styles.backToTopLabel}>Back to top</div>
        <Link
          to="#"
          className={styles.backToTopBtn}
          onClick={scrollToTop}
        ></Link>
      </div>
    </footer>
  );
};
