import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>DelivEats</h2>
          <p>
            DelivEats is your go-to app for fast, reliable food delivery from your favorite restaurants. Savor the
            flavors of the city from the comfort of your home!
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#" className="social-icon icon-facebook">
              &#xf09a;
            </a>
            <a href="#" className="social-icon icon-twitter">
              &#xf099;
            </a>
            <a href="#" className="social-icon icon-instagram">
              &#xf16d;
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DelivEats. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
