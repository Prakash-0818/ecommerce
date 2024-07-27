import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/cart-items";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "lap1",
    photo: "https://m.media-amazon.com/images/I/316ArzLeJ2L._MCnd_AC_.jpg",
    name: "macbook m1",
    stock: 10,
    quantity: 2,
    price: 68124,
  },
  {
    productId: "lap2",
    photo: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY218_.jpg',
    name: "macbook m2",
    stock: 4,
    quantity: 1,
    price: 89775
  }
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCost = 200;
const discount = Math.round(subTotal * 0.05);
const total = subTotal + tax + shippingCost - discount;

const Cart = () => {
  const [coupanCode, setCoupanCode] = useState<string>("");
  const [isvalidCoupan, setValidCoupan] = useState<boolean>(false);

  useEffect(()=>{
    const timeOutId = setTimeout(()=>{
        if(Math.random() > 0.5 ) {
            console.log(Math.random()); setValidCoupan(true);
        } 
        else {
            console.log(Math.random());
            setValidCoupan(false);
        } 
    }, 2000)

    return () => {
        clearTimeout(timeOutId);
    }
  },[coupanCode])
  return (
    <div className="cart">
      <main>

        {
          cartItems.length > 0 ? (
            cartItems.map((i)=><CartItems key={i.productId} cartItem={i} />)
          ) : <Link to="/">Add Item</Link>
          
        }
      </main>
      <aside>
        <p>SubTotal : ₹{subTotal}</p>
        <p>Shipping Chages: ₹{shippingCost}</p>
        <p>Tax : ₹{tax} </p>
        <p>
          Discount : <em className="green"> -₹{discount}</em>
        </p>
        <p>
          <strong>Total : ₹{total}</strong>
        </p>
        <input
          type="text"
          placeholder="Coupan Code"
          value={coupanCode}
          onChange={(e) => setCoupanCode(e.target.value)}
        />
        { 
            coupanCode && (
                isvalidCoupan ? (
                    <span className="green">
                      {discount} of using the <code>{coupanCode}</code>{" "}
                    </span>
                  ) : (
                    <span className="red">Invalid coupan <VscError/> </span>
                  )
            )
        }
        {
          cartItems.length > 0 && <Link to="/shipping">Checkout</Link> 
        }
      </aside>
    </div>
  );
};

export default Cart;
