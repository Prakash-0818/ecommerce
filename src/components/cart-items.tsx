import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type cartValue = {
    cartItem: any;
}

const CartItems = ({cartItem }: cartValue)=> {

    const {productId, photo, name, stock, quantity, price} = cartItem;

    return (
        <div className="cart-items">
            <img src={photo} alt={name} />
            <article>
            <Link to={`/product/${productId}`}>{name}</Link>
            <p>{price}</p>
            </article>
            <div>
                <button>-</button>
                <p>{quantity}</p>
                <button>+</button>

            </div>

            <div className="red">
                <FaTrash/>
            </div>
        </div>
    )
}

export default CartItems;