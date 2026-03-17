import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/technology', label: 'Technology' },
  { path: '/applications', label: 'Applications' },
  { path: '/research', label: 'Research' },
  { path: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="main-navbar">
        <div className="container">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">M</div>
            <span>METABOTICS</span>
          </Link>

          <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
            {navLinks.map(link => {
              if (link.label === 'Applications') {
                return (
                  <div 
                    key={link.path} 
                    className="dropdown-container"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button 
                      className={`dropdown-trigger ${location.pathname.includes('/applications') ? 'active' : ''}`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {link.label} <span className="dropdown-arrow">▼</span>
                    </button>
                    <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                      <Link to="/applications/steel-and-foundries">Steel & Foundries</Link>
                      <Link to="/applications/heat-treatment">Heat Treatment</Link>
                      <Link to="/applications/mining-and-materials">Mining & Materials</Link>
                      <Link to="/applications/energy-intensive">Energy Intensive</Link>
                      <div className="dropdown-divider"></div>
                      <Link to="/applications" className="dropdown-all">View All Applications</Link>
                    </div>
                  </div>
                )
              }
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link to="/contact" className="navbar-cta">Contact</Link>
          </div>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  )
}
