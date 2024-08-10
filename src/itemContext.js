import { createContext } from "react";
import { useState } from 'react';


const itemContext = createContext();

function CostomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    // console.log(props)
    return(
        <itemContext.Provider value={{item, setItem, total, setTotal}}>
            {children}

        </itemContext.Provider>
    )
}

export {itemContext};
export default CostomItemContext;