import { useState,createContext } from 'react';

export const PriceContext = createContext();

export const PriceContextProvider = ({children}) => {
    const [isToggled, setIsToggled] = useState(false);

    const value = {
        isToggled,
        setIsToggled
    }
    return (
        <PriceContext.Provider value={value}>{children}</PriceContext.Provider>
    )
} 

export default PriceContextProvider;