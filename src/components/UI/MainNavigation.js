import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartButton from "../Cart/CartButton";
import { cartActions } from "../../store/cartSlice";
import Modal from "./Modal";
import { loginActions } from "../../store/loginSlice";

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(loginActions.logoutHandler());
  };

  const showCartHandler = () => {
    dispatch(cartActions.toggleCartHandler());
  };

  const showModalHandler = () => {
    dispatch(cartActions.toggleCartHandler());
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <span>Ammajan</span>
      </div>
      <ul className={classes.links}>
        {isLoggedIn || (
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Home
            </NavLink>
          </li>
        )}
        {isLoggedIn || (
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              Login
            </NavLink>
          </li>
        )}

        {isLoggedIn && <CartButton onClick={showCartHandler} />}
        {showCart && <Modal onClick={showModalHandler} />}

        {isLoggedIn && (
          <li onClick={logoutHandler}>
            <NavLink to="/" activeClassName={classes.active}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default MainNavigation;
