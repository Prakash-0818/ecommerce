import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
    const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
  });

  const changeHandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingInfo((prev)=> ({...prev, [e.target.name]:e.target.value}))
  };

  

  return (
    <div className="shipping">
      <button className="back-btn" onClick={()=> navigate('/cart')}>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Address</h1>
        <input
          type="text"
          placeholder="Address"
          onChange={changeHandler}
          name="address"
          value={shippingInfo.address}
          required
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          required
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
          required
        />
        
        <select name="country" required onChange={changeHandler} value={shippingInfo.country}>
            <option value="">
                choose country
            </option>
            <option value="India">India</option>
        </select>
        <input
          type="number"
          placeholder="Pincode"
          name="pincode"
          value={shippingInfo.pincode}
          onChange={changeHandler}
          required
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
