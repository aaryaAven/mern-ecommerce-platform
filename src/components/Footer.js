import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3 mt-5"
      style={{
        background: "linear-gradient(135deg, #111, #1a1a1a)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <div className="container">
        <div className="row">

          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-warning">TechKart</h4>
            <p className="text-secondary">
              Your one-stop destination for the latest mobiles,
              laptops, and gaming accessories at the best prices.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/cart" className="footer-link">Cart</Link>
              </li>
              <li className="mb-2">
                <Link to="/login" className="footer-link">Login</Link>
              </li>
              <li className="mb-2">
                <Link to="/register" className="footer-link">Register</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled text-secondary">
              <li className="footer-link">Mobiles</li>
              <li className="footer-link">Laptops</li>
              <li className="footer-link">Accessories</li>
              <li className="footer-link">Gaming Accessories</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="text-secondary mb-1">Email: support@techkart.com</p>
            <p className="text-secondary mb-1">Phone: +91 98765 43210</p>
            <p className="text-secondary">Location: India</p>
          </div>

        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <div className="text-center text-secondary">
          <p className="mb-0">
            © {new Date().getFullYear()} TechKart. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Internal CSS */}
      <style>
        {`
          .footer-link {
            color: #bbb;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .footer-link:hover {
            color: #ffc107;
            transform: translateX(5px);
          }

          .social-icon {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #222;
            border-radius: 50%;
            color: #bbb;
            font-size: 16px;
            transition: all 0.3s ease;
            text-decoration: none;
          }

          .social-icon:hover {
            color: #fff;
            background: #ffc107;
            box-shadow: 0 0 15px #ffc107;
            transform: scale(1.1);
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;