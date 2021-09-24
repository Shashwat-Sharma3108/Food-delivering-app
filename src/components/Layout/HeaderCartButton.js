import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighgted]=useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item)=>{
    return currentNumber+item.amount;
  },0);

  const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ""}`;
  const {items} = cartCtx;
  useEffect(()=>{
    if(items.length === 0){
      return ;
    }
    setButtonIsHighlighgted(true);

    const animationTimer = setTimeout(()=>{
      setButtonIsHighlighgted(false);
    },300);

    return ()=>{
      clearTimeout(animationTimer);
    };
  },[items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;