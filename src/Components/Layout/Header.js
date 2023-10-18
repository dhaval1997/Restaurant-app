import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { HeaderImage } from "../Utils/mock";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodCart</h1>
        <HeaderCartButton onClick = {props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImage} alt="FoodImage" />
      </div>
    </Fragment>
  );
};

export default Header;
