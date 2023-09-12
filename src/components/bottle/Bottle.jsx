import './bottle.css'
const Bottle = ({b,handleAdd}) => {
    return (
        <div className="bottle">
            <h3>Name: {b.name} </h3>
            <h3>Price: {b.price}$ </h3>
            <img src={b.img} alt="" />
            <button onClick={()=>handleAdd(b)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;