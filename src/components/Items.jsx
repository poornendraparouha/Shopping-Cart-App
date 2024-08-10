import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import itemData from "../data/itemData"

function Items() {
  return (
    <div className={styles.wrapper}>
      {itemData.map((item) => (
              <ItemCard key={item.id}
                        id={item.id}
                        name={item.name} 
                        price={item.price} />
      ))}
    </div>
  );
}

export default Items;
