import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3>Product not found</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="row">

        {/* Product Image with Zoom */}
        <div className="col-md-6 text-center">

          <div
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              maxWidth: "450px",
              margin: "auto"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                transition: "transform 0.4s ease",
                objectFit: "contain"
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

        </div>

        {/* Product Info */}
        <div className="col-md-6">

          <h2>{product.name}</h2>

          <h4 className="text-primary mb-3">
            ₹{product.price}
          </h4>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          <p className="mt-3">
            {product.description}
          </p>

          <button
            className="btn btn-warning mt-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

      {/* Specifications */}
      <div className="mt-5">

        <h4 className="mb-3">Specifications</h4>

        <table className="table table-bordered">

          <tbody>
            {product.specs &&
              Object.entries(product.specs).map(([key, value]) => (
                <tr key={key}>
                  <td className="fw-bold text-capitalize">{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ProductDetails;