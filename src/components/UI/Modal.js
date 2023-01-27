import classes from "./Modal.module.css";
import CartItem from "../Cart/CartItem";
import { useSelector } from "react-redux";

const Modal = (props) => {
  const total = useSelector((state) => state.cart.total);
  const cartItem = useSelector((state) => state.cart.cartItem);
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <section className={classes.header}>
          <h3>Your Cart</h3>
        </section>
        <section className={classes.content}>
          <CartItem />
        </section>
        <section className={classes.footer}>
          <button onClick={props.onClick} className={classes.cancel}>
            Cancel
          </button>
          <button onClick={props.onClick} className={classes.success}>
            Pay {cartItem.length === 0 ? "" : total}
          </button>
        </section>
      </div>
    </div>
  );
};
export default Modal;
