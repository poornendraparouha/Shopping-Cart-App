import React from "react";
import styles from "../styles/cartModal.module.css";
import { useValue } from "../itemContext";


function CartModal({toggle}){
    const {total, handleReset} = useValue();

    return(
        <div className={styles.cartModal}>
            <div className={styles.closeButton} onClick={toggle}>
                Close
            </div>
            <div className={styles.clearButton} onClick={handleReset}>
                Clear
            </div>
            <div className={styles.itemContainer}>

            </div>
            <div className={styles.total}>
                <div className={styles.totalText}>Total</div>
                <div className={styles.totalPrice}>Price {total}</div>
            </div>
        </div>
    );
}

export default CartModal;