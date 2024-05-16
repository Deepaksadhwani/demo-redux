import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { showNotification } from "./store/uiSlice";
import Notification from "./components/UI/Notification";
function App() {
  const cartVisible = useSelector((store) => store.ui.cartIsVisible);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const notification = useSelector((store) => store.ui.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          state: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://e-commerce-website-portal-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed");
      }

      dispatch(
        showNotification({
          state: "success",
          title: "success!",
          message: "sent cart data successfully!",
        })
      );
    };
    sendCartData().catch((error) => {
      dispatch(
        showNotification({
          state: "error",
          title: "Error!",
          message: "sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <Fragment>
      {Notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
