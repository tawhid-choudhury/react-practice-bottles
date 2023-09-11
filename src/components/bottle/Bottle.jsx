import './bottle.css'
const Bottle = ({b}) => {
    return (
        <div className="bottle">
            <h3>Name: {b.name} </h3>
            <h3>Price: {b.price} </h3>
            <img src={b.img} alt="" />
        </div>
    );
};

export default Bottle;