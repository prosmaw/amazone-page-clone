import React from "react";
import amazone from './amazone.png';
import classes from './AppBar.module.css'

const Topbar = () =>{
    return(
        <header>
        <nav className={classes.Topbar}> 
        <img src={amazone} alt= "Amazone logo" className={classes.logo}></img>
      </nav>
      </header>
    )
}
export default Topbar;