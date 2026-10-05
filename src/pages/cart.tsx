import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { VscError } from "react-icons/vsc";

const cartItems = [];

const subtotal = 4000;

const tax = Math.round(subtotal * 0.18);

const shippingCharges = 200;

const total = subtotal + tax + shippingCharges;

const discount = 400;

function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <Header />
      <main>
        <aside>
          <p>Subtotal : ${subtotal}</p>
          <p>Shipping Charges :${shippingCharges}</p>
          <p>Tax: ${tax}</p>

          <p>
            Discount : <em>-${discount}</em>
          </p>

          <p>
            <b>Total: ${total}</b>
          </p>

          <input
            placeholder="Coupon Code"
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />

          {couponCode &&
            (isValid ? (
              <span className="green">
                ${discount} off using {couponCode}
              </span>
            ) : (
              <span className="red">
                Invalid coupon <VscError />{" "}
              </span>
            ))}
        </aside>
      </main>
    </div>
  );
}

export default Cart;
