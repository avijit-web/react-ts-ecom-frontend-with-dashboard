import { useState, type ChangeEvent } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="shipping">
      <button className="backbtn" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Details</h1>

        <input
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
          required
        />

        <input
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
          required
        />

        <input
          type="text"
          placeholder="Country"
          name="country"
          value={shippingInfo.country}
          onChange={changeHandler}
          required
        />

        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option value="">Choose Country</option>
          <option value="United States">United States</option>
          <option value="India">India</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <input
          type="text"
          placeholder="Pincode"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
          required
        />

        <button>Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
