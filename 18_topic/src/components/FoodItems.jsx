import { useState } from "react";
import Item from "./Item";

const FoodItems = ({fooditems, listdata}) => {
  const print_data = (item) => {
    console.log(`${item} is selected!`);
  }

  let [current, change] = useState([]);

  const printOnKeyDown = (event) => {
    if (event.key === "Enter"){
      listdata(event);
      event.target.value = "";
    }
  }

  return (
    <>
      <ul className="list-group">
        <Item 
        fooditems={fooditems}
        print_data={print_data}
        printOnKeyDown={printOnKeyDown}
        brought={current.includes(fooditems)}
        ></Item>
      </ul>
    </>
  );
}

export default FoodItems;

