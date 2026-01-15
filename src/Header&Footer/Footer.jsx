import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">BookMyShow Clone</h2>
          <p>
            Discover movies, events, sports and workshops. Book tickets
            seamlessly and instantly.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Movies</li>
            <li>Events</li>
            <li>Sports</li>
            <li>Plays</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Cancellation Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-linkedin-fill"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BookMyShow Clone | Built by Vedant Reddy
      </div>
    </footer>
  );
};

export default Footer;
