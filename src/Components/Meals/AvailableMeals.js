import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import { dummyList } from "../Utils/dummyData";
import MealItemForm from "./MealItemForm";

const AvailableMeals = () => {
  const mealsList = dummyList.map((item) => (
    <li key={item.id} className={classes.meal}>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}> ₹{item.price}</div>
      </div>
      <div>
        <MealItemForm item={item} id={item.id}/>
      </div>
    </li>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
