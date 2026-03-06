import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 product-card">

        {/* Clickable Image */}
        <Link
          to={`/product/${product._id}`}
          className="text-decoration-none"
        >
          <div
            style={{
              height: "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              padding: "15px"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                maxHeight: "200px",
                maxWidth: "100%",
                objectFit: "contain"
              }}
            />
          </div>
        </Link>

        <div className="card-body d-flex flex-column text-center">

          <h6 className="fw-semibold">{product.name}</h6>

          <p className="fw-bold text-primary mb-3">
            ₹{product.price}
          </p>

          <div className="mt-auto d-flex justify-content-center gap-2">

            {/* Add to Cart */}
            <button
              className="btn btn-warning btn-sm"
              onClick={() => addToCart(product)}
            >
              Add
            </button>

            {/* Details Button */}
            <Link
              to={`/product/${product._id}`}
              className="btn btn-dark btn-sm"
            >
              Details
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;