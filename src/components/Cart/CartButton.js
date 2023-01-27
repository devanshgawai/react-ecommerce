import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const numberOfItems = useSelector((state) => state.cart.numberOfItems);

  return (
    <button className={classes.cartBtn} onClick={props.onClick}>
      Your cart <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};
export default CartButton;
