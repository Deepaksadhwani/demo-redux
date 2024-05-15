import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggle } from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((store) => store.cart.totalQuantity);
  const toggleHandler = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
