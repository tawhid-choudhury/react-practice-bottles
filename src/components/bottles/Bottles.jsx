import { useEffect, useState } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'
import Cart from "../cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    const handleAdd = (b) => {
        setCartItems([...cartItems, b]);
    }
    return (<>
        <Cart cartItems={cartItems}></Cart>
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