import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (cartItem) => {
    dispatch(cartActions.addItemsToTheCart(cartItem));
  };

  const products = props.products.filter((product) => {
    if (props.searchTerm === "") {
      console.log("searchterm empty");
      return product;
    } else {
      return product.category.includes(props.searchTerm);
    }
  });

  return (
    <>
      <div className={classes["product-center"]}>
        {products.map((product) => {
          return (
            <li className={classes.productCard} key={product.id}>
              <div className={classes.imgContainer}>
                <img src={product.image} alt="product" />
              </div>
              <div className={classes.cardContent}>
                <h4 className={classes.heading}>{product.title.split()[0]}</h4>
                <p className={classes.price}>Rs.{product.price}</p>
              </div>
              <button
                type="submit"
                onClick={addToCartHandler.bind(this, product)}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
};
export default ProductItem;
