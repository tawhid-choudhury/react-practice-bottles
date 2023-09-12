import './Cart.css'
const Cart = ({cartItems}) => {
    console.log(cartItems);
    return (
        <div className="cart">
            <h3>Number of Items in Cart: {cartItems.length}</h3>
            <h3>Items:</h3>
            <div className='cih'>
                {cartItems.map(ci =><div className=''>
                     <img src={ci.img} />
                     <h4>Name: {ci.name}</h4>
                     <h4>Price: {ci.price}$</h4>
                     </div>
                     )}
            </div>
        </div>
    );
};

export default Cart;