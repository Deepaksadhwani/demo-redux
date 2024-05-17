import { replaceCart } from "./cartSlice";
import { showNotification } from "./uiSlice";

export const fetchCartData = () => {
  return async(dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://e-commerce-website-portal-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      const data = await response.json();
      return data;
    };
    try {
     const cartData =  await fetchData();
        dispatch(replaceCart(cartData))
    } catch (error) {
        dispatch(
            showNotification({
              state: "success",
              title: "success!",
              message: "fetching cart data successfully!",
            })
          );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        state: "pending",
        title: "sending...",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://e-commerce-website-portal-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        showNotification({
          state: "success",
          title: "success!",
          message: "sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          state: "error",
          title: "Error!",
          message: "sending cart data failed!",
        })
      );
    }
  };
};
