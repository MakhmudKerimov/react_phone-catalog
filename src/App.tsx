import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App = () => (
  <div className={styles.app}>
    <Header />
    <Outlet />
    <Footer />
  </div>
);
