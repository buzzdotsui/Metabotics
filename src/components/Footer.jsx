import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">M</div>
              <span>METABOTICS</span>
            </Link>
            <p>
              Intelligent automation for metallurgical and materials processing.
              Building the future of smart manufacturing in Africa.
            </p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/applications">Applications</Link>
            <Link to="/research">Research</Link>
          </div>

          <div className="footer-column">
            <h4>Solutions</h4>
            <Link to="/applications">Steel &amp; Foundries</Link>
            <Link to="/applications">Heat Treatment</Link>
            <Link to="/applications">Mining</Link>
            <Link to="/applications">Energy</Link>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="mailto:contact@metabotics.io">Email Us</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/Metabotics26" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <Link to="/contact">Partner With Us</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Metabotics. All rights reserved. Akure, Nigeria.</p>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://x.com/Metabotics26" target="_blank" rel="noopener noreferrer" aria-label="X">𝕏</a>
            <a href="mailto:contact@metabotics.io" aria-label="Email">✉</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
