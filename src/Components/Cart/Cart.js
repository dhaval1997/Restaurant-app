
import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const handleCartItemChange = (id, action) => {
    if (action === "add") {
      cartCtx.addItem(cartCtx.items.find((item) => item.id === id));
    } else if (action === "remove") {
      cartCtx.removeItem(id);
    }
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <CartItem
            price={item.price}
            name={item.name}
            quantity={item.quantity}
            onAdd={() => handleCartItemChange(item.id, "add")}
            onRemove={() => handleCartItemChange(item.id, "remove")}
          />
        </li>
      ))}
    </ul>
  );

  const totalAmount = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
