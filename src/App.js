import React from 'react';
import classes from './App.module.css';
import amazone from './amazone.png';
import ProductData from './ProductData';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className={classes.Topbar}> 
        <img src={amazone} alt= "Amazone logo" className={classes.logo}></img>
      </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt='preview'></img>
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>
            {ProductData.description}
          </p>

          <h3 className={classes.SectionHeading}> Select Color</h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src= "https://imgur.com/iOeUBV7.png" alt='red watch'></img>
            <img className={classes.ProductImage} src= "https://imgur.com/PTgQlim.png" alt='purple watch'></img>
            <img className={classes.ProductImage} src= "https://imgur.com/Mplj1YR.png" alt='blue watch'></img>
            <img className={classes.ProductImage} src= "https://imgur.com/xSIK4M8.png" alt='black watch'></img>
          </div>
          <h3 className={classes.SectionHeading}> Features</h3>
          <div>
            <button className={classes.FeatureItem}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
            <button>Time</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
