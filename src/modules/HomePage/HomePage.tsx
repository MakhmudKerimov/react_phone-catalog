/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { getProducts } from '../../api';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';
import { Product } from '../../types/types';
import { PicturesSlider } from './components/PicturesSlider/PicturesSlider';
import { ShopByCategory } from './components/ShopByCategory/ShopByCategory';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setErrorMessage(`Can't get products`));
  }, []);

  const productsByDiscount = products.sort((a, b) => {
    const discountA = a.fullPrice - a.price;
    const discountB = b.fullPrice - b.price;

    return discountB - discountA;
  });

  const productsByYear = products.sort((a, b) => b.year - a.year);

  return errorMessage ? (
    <h1 className={styles.error}>{errorMessage}</h1>
  ) : (
    <div className={styles.homePage}>
      <h1 className={styles.welcomeTitle}>Product Catalog</h1>
      <PicturesSlider />
      <ProductsSlider title={`Brand new models`} products={productsByYear} />
      <ShopByCategory products={products} />
      <ProductsSlider
        title={`Hot prices`}
        products={productsByDiscount}
        discount={true}
      />
    </div>
  );
};
