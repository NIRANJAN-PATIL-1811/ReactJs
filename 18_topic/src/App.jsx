import ErrorMessage from "./components/ErroMessage";
import FoodItems from "./components/FoodItems";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [currentValue, changeMethod] = useState([
    "Dal",
    "Rice",
    "Milk",
    "Roti",
    "Panir",
  ]);

  // let [currentValue, changeMethod] = useState([]);

  const listdata = (event) => {
    changeMethod([...currentValue, event.target.value]);
  };

  return (
    <>
      <div className={`${styles["main-div"]}`}>
        <h1 className={`${styles["main-heading"]} ${styles["main-heading2"]}`}>
          HEALTHY FOOD ITEMS
        </h1>
        <ErrorMessage FOODITEMS={currentValue}></ErrorMessage>
        <FoodItems fooditems={currentValue} listdata={listdata}></FoodItems>
      </div>
    </>
  );
}

export default App;
