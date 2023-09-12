import { useEffect, useState } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'
import Cart from "../cart/Cart";

const cartLocal = JSON.parse(localStorage.getItem('cart') || "[]")

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cartItems, setCartItems] = useState(cartLocal);

    
    
    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cartItems))
    },[cartItems])

    const handleRemove = (ci) => {
        const newCart = cartItems.filter((cartItem) => cartItem !== ci)
        setCartItems(newCart);
    }

    const handleAdd = (b) => {
        const newCart = [...cartItems, b];
        setCartItems(newCart);
    }
    return (<>
        <Cart cartItems={cartItems} handleRemove={handleRemove}></Cart>
        <div className="bottles">
            {
                bottles.map((b,i) => <Bottle 
                key={i}
                 b={b}
                handleAdd ={handleAdd}
                 ></Bottle>)
            }
        </div>
        </>
    );
};

export default Bottles;