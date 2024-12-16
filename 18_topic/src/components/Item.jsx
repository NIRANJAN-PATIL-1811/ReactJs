import styles from "./Items.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Item({fooditems, print_data, printOnKeyDown, brought}){
  return (
    <>
      <input type="text" placeholder="Enter your item here..." onKeyDown={(event) => printOnKeyDown(event)}/>
      {
        fooditems.map((item) => <li key={item} className={`list-group-item ${brought && "active"}`}>
          {item}
        <button onClick={print_data(item)} type="button" className={`${styles["custom-btn"]} btn btn-info`}>
          <HiOutlineShoppingBag />
        </button></li>)
      }
    </>
  );
}

export default Item;