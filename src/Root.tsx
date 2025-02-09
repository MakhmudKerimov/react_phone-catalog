import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';

import { CartProvider, FavoritesProvider } from './context/Context';
import { FavoritesPage } from './modules/FavoritesPage/FavoritesPage';
import { HomePage } from './modules/HomePage/HomePage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import { ProductsPage } from './modules/ProductsPage/ProductsPage';
import { ShoppingCartPage } from './modules/ShoppingCartPage/ShoppingCartPage';

export const Root = () => (
  <HashRouter>
    <FavoritesProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="phones" element={<ProductsPage />} />
            <Route path="tablets" element={<ProductsPage />} />
            <Route path="accessories" element={<ProductsPage />} />
            <Route path="phones/:productId" element={<ProductDetailsPage />} />
            <Route path="tablets/:productId" element={<ProductDetailsPage />} />
            <Route
              path="accessories/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart" element={<ShoppingCartPage />} />
          </Route>
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </CartProvider>
    </FavoritesProvider>
  </HashRouter>
);
