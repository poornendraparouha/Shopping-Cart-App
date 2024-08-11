import { createContext, useContext, useState} from "react";
import CartModal from "./components/CartModal";

function useValue(){
    const value= useContext(itemContext);
    return value;
}

const itemContext = createContext();

function CostomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);

    const handleAdd = (price) => {
        setTotal(total + price)
        setItem(item + 1)
      };

      const handleRemove = (price) => {
        if (total <= 0){
          return
        }
        setTotal((prevState)=> prevState - price);
        setItem(item - 1);
      };

      const handleReset = (price) => {
        setTotal(0);
        setItem(0);
      }
      const toggleCart = () => {
        setShowCart(!showCart);
      }

    return(
        <itemContext.Provider value={{item, total, handleAdd, handleRemove, handleReset, toggleCart}}>
            {showCart && < CartModal toggle={toggleCart} />}
            {children}

        </itemContext.Provider>
    )
}

export {itemContext, useValue};
export default CostomItemContext;