import { useContext } from 'react';
import styles from '../FavoritesPage/Favorites.module.scss';

import { Link } from 'react-router-dom';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { FavoritesContext } from '../../context/Context';

export const FavoritesPage = () => {
  const { favoritesItems } = useContext(FavoritesContext);

  return (
    <div className={styles.FavoritesPageContainer}>
      <div className={styles.FavoritesPage}>
        <div className={styles.path}>
          <Link to="/" className={styles.homeLink}>
            <div className={styles.pathHome}></div>
          </Link>
          <div className={styles.pathSeparator}></div>
          <p className={styles.pathName}>Favorites</p>
        </div>
        <h1 className={styles.title}>Favourites</h1>
        <p className={styles.counter}>{favoritesItems.length} items</p>
        <ProductsList products={favoritesItems} />
      </div>
    </div>
  );
};
