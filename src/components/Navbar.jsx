import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const value = useValue();


  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
    </div>
  );
}

export default Navbar;
