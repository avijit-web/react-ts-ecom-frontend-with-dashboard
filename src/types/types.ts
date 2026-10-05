export type OrderStatus = "Processing" | "Shipped" | "Delivered";

export type OrderItem = {
  _id: string;
  productId: string;
  name: string;
  photo: string;
  price: number;
  quantity: number;
};

export type Order = {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: number;
  status: OrderStatus;
  subtotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItem[];
};
