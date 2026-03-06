import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  const { search, setSearch } = useContext(SearchContext);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Get cart count from localStorage
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
      setCartCount(totalQty);
    };

    updateCart();
    window.addEventListener("storage", updateCart);
    return () => window.removeEventListener("storage", updateCart);
  }, []);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg px-4 sticky-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="TechKart Logo"
            style={{
              height: "45px",
              width: "auto",
              objectFit: "contain"
            }}
          />
        </Link>

        {/* Search */}
        <div className="mx-auto search-container">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search premium tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Right Buttons */}
        <div className="d-flex align-items-center gap-3">

          <Link to="/" className="nav-link-custom">
            Home
          </Link>

          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

          <Link to="/login" className="nav-link-custom">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>

        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .navbar {
            background: rgba(20, 20, 20, 0.7);
            backdrop-filter: blur(15px);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
          }

          .navbar-scrolled {
            box-shadow: 0 5px 20px rgba(0,0,0,0.4);
          }

          .search-container {
            width: 40%;
          }

          .search-input {
            border-radius: 30px;
            padding: 8px 18px;
            border: none;
            outline: none;
            background: rgba(255,255,255,0.1);
            color: white;
          }

          .search-input::placeholder {
            color: #ccc;
          }

          .search-input:focus {
            box-shadow: 0 0 12px #ffc107;
          }

          .nav-link-custom {
            color: #ddd;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .nav-link-custom:hover {
            color: #ffc107;
            transform: translateY(-2px);
          }

          .register-btn {
            background: linear-gradient(45deg, #ffc107, #ff9800);
            padding: 6px 14px;
            border-radius: 20px;
            color: black;
            font-weight: 600;
            text-decoration: none;
            transition: 0.3s ease;
          }

          .register-btn:hover {
            box-shadow: 0 0 15px #ffc107;
            transform: translateY(-2px);
          }

          .cart-icon {
            position: relative;
            color: white;
            font-size: 1.2rem;
            transition: 0.3s ease;
          }

          .cart-icon:hover {
            color: #ffc107;
            transform: scale(1.1);
          }

          .cart-badge {
            position: absolute;
            top: -6px;
            right: -10px;
            background: #ffc107;
            color: black;
            font-size: 10px;
            padding: 3px 6px;
            border-radius: 50%;
            font-weight: bold;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;