import React, { useContext, useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import CartContext from "../store/cart-context";

const MealItemForm = (props) => {
  const quantityInputRef = useRef();
  const [quantityIsValid, setquantityIsValid] = useState(true);

  const cartCtx = useContext(CartContext);
  const addItemToCartHandler = (e) => {
    e.preventDefault();
    // cartCtx.addItem(props.item);
    // console.log(cartCtx.items);
    const enteredQuantity = quantityInputRef.current.value;
    const quantity = +enteredQuantity;

    if (quantity <= 0) {
      setquantityIsValid(false);
      return;
    }

    cartCtx.addItem({ ...props.item, quantity });
  };

  return (
    <form className={classes.form}>
      <Input
        label="Quantity"
        input={{
          id: "quantity",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          ref: quantityInputRef,
        }}
      />
      <button onClick={addItemToCartHandler}>+ Add</button>
      {!quantityIsValid && <p>Please enter a valid quantity</p>}
    </form>
  );
};

export default MealItemForm;
