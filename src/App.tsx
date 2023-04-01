import React, { FC } from 'react';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import GoodsPage from './components/GoodsPage';
import Header from './components/Header';
import Thanks from './components/Thanks';
import UpFilter from './components/UpFilter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Catalog from './components/Catalog';


const App: FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <UpFilter />
      <Catalog />
      <GoodsPage />
      <CartPage />
      <Thanks />
      <Footer />
    </Provider>
  );
};

export default App;
