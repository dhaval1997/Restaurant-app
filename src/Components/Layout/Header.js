import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
// import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodCart</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxmb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2200&q=180" alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
