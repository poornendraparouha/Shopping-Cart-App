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
    const [cart, setCart] = useState([]);


    const handleAdd = (prod) => {
      const index = cart.findIndex((item)=> item.id === prod.id)

      if( index === -1){
        setCart([...cart, {...prod, qty: 1}]);
        setTotal(total + prod.price);
      }
      else{
        cart[index].qty++ ;
        setCart(cart);
        setTotal(total + cart[index].price);
        setItem(item + 1);
        console.log(cart);
      }

        // setTotal(total + price)
        // setItem(item + 1)
      };

      const handleRemove = (price) => {
        if (total <= 0){
          return
        }
        setTotal((prevState)=> prevState - price);
        setItem(item - 1);
      };

      const handleReset = (price) => {
        setCart([]);
        setTotal(0);
        setItem(0);
      }
      const toggleCart = () => {
        setShowCart(!showCart);
      }

    return(
        <itemContext.Provider value={{item, total, cart, handleAdd, handleRemove, handleReset, toggleCart}}>
            {showCart && < CartModal toggle={toggleCart} />}
            {children}

        </itemContext.Provider>
    )
}

export {itemContext, useValue};
export default CostomItemContext;