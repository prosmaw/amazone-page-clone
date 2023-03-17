import React from 'react'

import classes from './ProductPreview.module.css'

const ProductPreview = (props) => {

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

return (
    <div className={classes.ProductPreview}>
    <img src="https://imgur.com/iOeUBV7.png" alt='preview'></img>
    <div className={classes.TimeSection}> <p> {currentHour}:{currentMinutes} </p> </div>
    {/*<div className={classes.HeartBeatSection}> 
    <i class="fa-solid fa-heart-pulse"></i>
    <p>78 </p> </div>*/}
</div>
);
}

export default ProductPreview;