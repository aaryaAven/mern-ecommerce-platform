import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id
        ? { ...item, qty: (item.qty || 1) + 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item._id === id
          ? { ...item, qty: (item.qty || 1) - 1 }
          : item
      )
      .filter((item) => item.qty > 0);

    updateCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    updateCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.qty || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your Cart is Empty 🛒</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Shopping Cart</h3>

      {cart.map((item) => (
        <div key={item._id} className="card mb-3 shadow-sm border-0">
          <div className="row g-0 align-items-center">
            
            <div className="col-md-2 text-center p-2">
              <img
                src={item.image}
                alt={item.name}
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
            </div>

            <div className="col-md-4">
              <div className="card-body">
                <h6>{item.name}</h6>
                <p className="mb-1">₹{item.price}</p>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => decreaseQty(item._id)}
              >
                −
              </button>

              <span className="fw-bold">{item.qty || 1}</span>

              <button
                className="btn btn-sm btn-secondary ms-2"
                onClick={() => increaseQty(item._id)}
              >
                +
              </button>
            </div>

            <div className="col-md-2 text-center">
              ₹{item.price * (item.qty || 1)}
            </div>

            <div className="col-md-1 text-center">
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(item._id)}
              >
                ✕
              </button>
            </div>

          </div>
        </div>
      ))}

      <div className="text-end mt-4">
        <h4>Total: ₹{totalPrice}</h4>
      </div>
    </div>
  );
}

export default CartPage;