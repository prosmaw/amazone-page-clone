import React, {Component} from 'react';
import classes from './App.module.css';

import ProductPreview from './ProductPreview/ProductView';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './TopBar/TopBar';
import ProductData from './utils/ProductData';


class App extends Component{
state = {
  productData: ProductData,
  currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
  currentPreviewImagepos: 0,
  showHeartBeatSection: false
}

 onColorOptionClick = (pos) =>{

this.setState({currentPreviewImagepos: pos})
}

onFeatureItemClick = (pos) =>{
  let updatedstate = false;
  if(pos === 1){
    updatedstate = true;
  }
this.setState({showHeartBeatSection: updatedstate});
}
  render(){
    return (
      <div className="App">
        <Topbar/>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagepos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagepos={this.state.currentPreviewImagepos} onFeatureItemClick={this.onFeatureItemClick}
            showHeartBeatSection={this.state.showHeartBeatSection}/>
          </div>
  
        </div>
      </div>
    );
  }
 
 
}

export default App;
