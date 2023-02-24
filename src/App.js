import React from 'react';
import classes from './App.module.css';
import amazone from './amazone.png';
import ProductData from './ProductData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
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
          {/*<div className={classes.TimeSection}> <p> {currentHour}:{currentMinutes} </p> </div>*/}
          <div className={classes.HeartBeatSection}> 
          <i class="fa-solid fa-heart-pulse"></i>
          <p>78 </p> </div>
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
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
            
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
