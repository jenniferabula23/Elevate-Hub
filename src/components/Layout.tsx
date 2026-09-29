import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Menu, MessageCircle, X, Youtube } from 'lucide-react';
import { LOGO_SRC, WHATSAPP_URL } from '../data';

function Brand({ className = '' }: { className?: string }) {
  return (
    <span className={`brand ${className}`}>
      <img src={LOGO_SRC} alt="Elevate Hub — Rising Beyond Boundaries" className="brand-logo" />
    </span>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
  }, [location.pathname, location.hash]);

  const closeMenu = () => setMenuOpen(false);
  const headerSolid = scrolled || !isHome;

  return (
    <div className="site-shell">
      <header className={`site-header ${headerSolid ? 'site-header-scrolled' : ''}`}>
        <Link className="brand-link" to="/" onClick={closeMenu} aria-label="Elevate Hub home">
          <Brand />
        </Link>
        <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`}>
          <Link to="/#about" onClick={closeMenu}>About us</Link>
          <Link to="/#projects" onClick={closeMenu}>Projects</Link>
          <NavLink to="/sessions" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
            Sessions
          </NavLink>
          <NavLink to="/partners" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
            Partners
          </NavLink>
          <Link to="/#founder" onClick={closeMenu}>Founder</Link>
          <Link to="/#contact" onClick={closeMenu}>Contact</Link>
        </nav>
        <div className="header-actions">
          <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp us <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <Outlet />

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Elevate Hub on WhatsApp"
      >
        <MessageCircle size={24} />
        <span>Link up</span>
      </a>

      <footer className="site-footer">
        <div className="container footer-top">
          <Link className="brand-link footer-brand" to="/">
            <Brand className="footer-logo" />
          </Link>
          <p>
            Rising beyond boundaries.
            <br />
            One young person at a time.
          </p>
          <div className="social-links">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={17} />
            </a>
            <a href="/#contact" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="/#contact" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="/#contact" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="/#contact" aria-label="Youtube">
              <Youtube size={17} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Elevate Hub. All rights reserved.</span>
          <span>
            Funsi · Ghana <span className="footer-dot">●</span> Education in action
          </span>
        </div>
      </footer>
    </div>
  );
}
