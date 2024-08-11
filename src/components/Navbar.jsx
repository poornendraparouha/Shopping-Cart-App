import React from "react";
import styles from "../styles/Nav.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const {item, total, handleReset, toggleCart } = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
      <button className={styles.button} onClick={toggleCart}>Cart</button>
        <button className={styles.button} onClick={handleReset}>Reset Cart</button>
      </div>
    </div>
  );
}

export default Navbar;
