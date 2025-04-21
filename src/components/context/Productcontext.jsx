import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const Productcontext = createContext();

export const ProductProvider = ({children})=>{
    const [product,setproduct] = useState([])

    const fetchproduct = async()=>{
        try {
            const response = await axios.get("https://furniture-api.fly.dev/v1/products?limit=100")
            console.log(response.data.data);
            setproduct(response.data.data)
            
            
        } catch (error) {
            console.log(error);
            
            
        }
        
    }
    useEffect(()=>{
        fetchproduct()
    }, [])
    return(
        <Productcontext.Provider value={{product}}>{children}</Productcontext.Provider>
    )
}


