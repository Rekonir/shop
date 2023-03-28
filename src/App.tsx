import React from 'react';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import Goods from './components/Catalog';
import GoodsPage from './components/GoodsPage';
import Header from './components/Header';
import Thanks from './components/Thanks';
import UpFilter from './components/UpFilter';

const App = () => {
  return (
    <div>
      <Header/>
      <UpFilter/>
      <Goods/>
      <GoodsPage/>
      <CartPage/>
      <Thanks/>
      <Footer/>
    </div>
  );
};

export default App;
