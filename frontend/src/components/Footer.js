/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Idemdrem</h3>
          <p>
            Idemdrem is not intended to perform diagnosis, but rather to provide users
            the ability to image, track, and better understand their skin conditions.
          </p>
          <p className="copyright">© 2026 Idemdrem by LogiDevs. All Rights Reserved.</p>
        </div>

        <div className="footer-links-section">
          <h4>Quick Links</h4>
          <a href="#">Main</a>
          <a href="#">Early Detection</a>
          <a href="#">How it Works</a>
          <a href="#">Features</a>
        </div>

        <div className="footer-links-section footer-contact">
          <h4>Get in Touch</h4>
          <p>Have questions? Reach out to us:</p>
          <p className="email">support@logidevs.com</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Built with ❤️ by LogiDevs — For demonstration and educational purposes only.</p>
      </div>
    </footer>
  );
}

export default Footer;
