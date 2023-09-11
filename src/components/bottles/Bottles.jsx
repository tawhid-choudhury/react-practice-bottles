import { useEffect, useState } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    
    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    return (
        <div className="bottles">
            {
                bottles.map(b => <Bottle b={b}></Bottle>)
            }
        </div>
    );
};

export default Bottles;