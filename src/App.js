import React from 'react';
import classes from './App.module.css';
import amazone from './amazone.png';
import ProductData from './ProductData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductPreview from './ProductView';
import ProductDetails from './ProductDetails';
import Topbar from './TopBar';



function App() {
 
  return (
    <div className="App">
      <Topbar/>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>

        <div className={classes.ProductData}>
          <ProductDetails/>
        </div>

      </div>
    </div>
  );
}

export default App;
