import CartItem from "./CartItem.jsx";

const Cart = ({ items, updateQuantity, removeItem, clearCart }) => {
  const total = items.reduce(
    (acc, item) => acc + item.amount * parseFloat(item.price),
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={updateQuantity}
          onRemove={removeItem}
        />
      ))}
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <button onClick={clearCart} className="button">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
