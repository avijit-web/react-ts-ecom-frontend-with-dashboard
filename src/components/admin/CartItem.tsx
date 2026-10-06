import { FaTrash } from "react-icons/fa";
import { Link } from "react-router";

type CartItemProps = {
  cartItem: any;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { photo, productId, price, quantity, name, stock } = cartItem;

  return (
    <div className="cart-item">
      <img
        src={photo}
        style={{
          width: "200px",
        }}
        alt=""
      />
      <article>
        <Link to={`/product/${productId}`} className="cart-item-name">
          {name}
        </Link>
        <span>${price}</span>
      </article>

      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>

      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
