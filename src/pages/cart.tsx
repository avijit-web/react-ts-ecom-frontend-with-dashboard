import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/admin/CartItem";
import { Link } from "react-router";

const cartItems = [
  {
    productId: 1,
    name: "Product 1",
    price: 1000,
    photo:
      "https://plus.unsplash.com/premium_photo-1764028979247-58d20965c7cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 2,
    stock: 10,
  },
];

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
    <div>
      <Header />

      <div className="cart">
        <main>
          {cartItems.length > 0 ? (
            cartItems.map((i, _idx) => <CartItem key={_idx} cartItem={i} />)
          ) : (
            <p>Your cart is empty</p>
          )}
        </main>

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
                ${discount} off using <code>{couponCode}</code>
              </span>
            ) : (
              <span className="red">
                Invalid coupon <VscError />{" "}
              </span>
            ))}

          {cartItems.length > 0 && (
            <Link to="/shipping">Proceed to Checkout</Link>
          )}
        </aside>
      </div>
    </div>
  );
}

export default Cart;
