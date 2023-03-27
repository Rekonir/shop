import React from 'react';
import Footer from './components/Footer';
import Goods from './components/Goods';
import Header from './components/Header';
import UpFilter from './components/UpFilter';

const App = () => {
  return (
    <div>
      <Header/>
      <UpFilter/>
      <Goods/>
      <Footer/>
    </div>
  );
};

export default App;
