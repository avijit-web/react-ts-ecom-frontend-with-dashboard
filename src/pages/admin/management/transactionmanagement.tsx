import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import type { Order, OrderItem, OrderStatus } from "../../../types/types";

const server: string = import.meta.env.VITE_SERVER ?? "";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const nextStatus: Record<OrderStatus, OrderStatus | null> = {
  Processing: "Shipped",
  Shipped: "Delivered",
  Delivered: null,
};

const orderItems: OrderItem[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsaasdas",
    productId: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];

const resolvePhoto = (photo: string) =>
  photo.startsWith("http") ? photo : `${server}/${photo}`;

const TransactionManagement = () => {
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order>({
    name: "Puma Shoes",
    address: "77 black street",
    city: "Neyword",
    state: "Nevada",
    country: "US",
    pinCode: 242433,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = (): void => {
    const next = nextStatus[status];
    if (!next) return;

    setOrder((prev) => ({ ...prev, status: next }));
    toast.success(`Order marked as ${next}`);
  };

  const deleteHandler = (): void => {
    if (!window.confirm("Delete this order?")) return;

    // TODO: call your delete API here
    toast.success("Order deleted");
    navigate("/admin/transaction");
  };

  const statusClass =
    status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red";

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>

          {order.orderItems.map((i) => (
            <ProductCard
              key={i._id}
              name={i.name}
              photo={resolvePhoto(i.photo)}
              productId={i.productId}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </section>

        <article className="shipping-info-card">
          <button className="product-delete-btn" onClick={deleteHandler}>
            <FaTrash />
          </button>
          <h1>Order Info</h1>

          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: ₹{subtotal}</p>
          <p>Shipping Charges: ₹{shippingCharges}</p>
          <p>Tax: ₹{tax}</p>
          <p>Discount: ₹{discount}</p>
          <p>Total: ₹{total}</p>

          <h5>Status Info</h5>
          <p>
            Status: <span className={statusClass}>{status}</span>
          </p>

          {nextStatus[status] && (
            <button className="shipping-btn" onClick={updateHandler}>
              Process Status
            </button>
          )}
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({
  name,
  photo,
  price,
  quantity,
  productId,
}: OrderItem) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${productId}`}>{name}</Link>
    <span>
      ₹{price} X {quantity} = ₹{price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
