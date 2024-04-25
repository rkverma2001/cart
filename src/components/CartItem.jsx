const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "50px", height: "50px" }}
      />
      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
        <button onClick={() => onUpdateQuantity(item.id, item.amount + 1)}>
          +
        </button>
        <input type="number" value={item.amount} readOnly />
        <button onClick={() => onUpdateQuantity(item.id, item.amount - 1)}>
          -
        </button>
        <button onClick={() => onRemove(item.id)} className="button remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
