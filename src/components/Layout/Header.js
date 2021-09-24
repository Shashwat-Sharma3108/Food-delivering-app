import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
   return( <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onCartButton}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Just Delicious Food"/>
        </div>
    </>)
}

export default Header;