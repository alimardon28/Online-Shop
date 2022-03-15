import { createContext, useEffect, useState } from "react";

const Context = createContext()

function Provider ({children}){



    const  [product , setProduct] = useState([]);
    const  [products , setProducts] = useState(window.localStorage.getItem('products') || '');
    const  [korzinka, setKorzinka] = useState([])
    const [lang , setLang] = useState(window.localStorage.getItem('lang') || 'uz')

    useEffect(()=>{
        fetch('http://localhost:3001/posts')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])



    useEffect(()=>{
        window.localStorage.setItem('products' , products)
    } , [products])



    useEffect(()=>{
        window.localStorage.setItem('lang' , lang)
    } , [lang])

    return(
        <Context.Provider value={{lang , setLang , product , setProduct , products ,setProducts, korzinka, setKorzinka}}>{children}</Context.Provider>
    )
}

export {Context , Provider}
