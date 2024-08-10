import { createContext, useContext, useState} from "react";

function useValue(){
    const value= useContext(itemContext);
    return value;
}

const itemContext = createContext();

function CostomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

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

    return(
        <itemContext.Provider value={{item, total, handleAdd, handleRemove}}>
            {children}

        </itemContext.Provider>
    )
}

export {itemContext, useValue};
export default CostomItemContext;