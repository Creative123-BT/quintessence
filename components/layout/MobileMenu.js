'use client'
import Link from "next/link";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="Quintessence" style={{ maxHeight: '60px' }} />
            </Link>
          </div>
          <div className="menu-outer">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                <li><Link href="/about-us" onClick={handleMobileMenu}>About Us</Link></li>
                <li><Link href="/test-preparation" onClick={handleMobileMenu}>Test Preparation</Link></li>
                <li><Link href="/contact" onClick={handleMobileMenu}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Plot No 20, Ambal Nagar, Chennai</li>
              <li><Link href="tel:+919840369259">+91-9840369259</Link></li>
              <li><Link href="mailto:support@quintessence-global.com">support@quintessence-global.com</Link></li>
            </ul>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
              <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
              <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
              <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
              <li><Link href="/"><span className="fab fa-youtube"></span></Link></li>
            </ul>
          </div>
        </nav>
      </div>{/* End Mobile Menu */}
      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
};
