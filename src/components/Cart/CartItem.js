import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import classes from "./CartItem.module.css";

const CartItem = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (cartElement) => {
    dispatch(cartActions.addItemsToTheCart(cartElement));
  };

  const removeFromCartHandler = (cartElementId) => {
    dispatch(cartActions.deleteItemsFromTheCart(cartElementId));
  };
  const cartItem = useSelector((state) => state.cart.cartItem);
  return (
    <>
      {cartItem.length === 0 && <p>Cart is empty.</p>}
      {cartItem.map((cartElement) => (
        <>
          <li className={classes.cartItem} key={cartElement.id}>
            <h4>
              {cartElement.title} <span>x {cartElement.quantity}</span>
            </h4>
            <p>
              Price : {cartElement.price} = {cartElement.totalAmount}
            </p>
            <div className={classes["cart-utility"]}>
              <button
                onClick={removeFromCartHandler.bind(this, cartElement.id)}
              >
                -
              </button>
              <span className={classes.quantity}>1</span>
              <button onClick={addToCartHandler.bind(this, cartElement)}>
                +
              </button>
            </div>
          </li>
          <article className={classes.underline}></article>
        </>
      ))}
    </>
  );
};
export default CartItem;
