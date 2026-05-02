'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
  return (
    <>
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        {/* Header Top - Hidden on mobile */}
        <div className="header-top d-none d-lg-block">
          <div className="outer-container">
            <div className="top-inner">
              <div className="top-left">
                <ul className="info clearfix">
                  <li><i className="icon-1"></i><Link href="mailto:support@quintessence-global.com">support@quintessence-global.com</Link></li>
                  <li><i className="icon-2"></i>Main Square, Global City</li>
                  <li><i className="icon-3"></i>Mon - Sat: 9.00 to 18.00</li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-links clearfix">
                  <li><Link href="/"><i className="icon-4"></i></Link></li>
                  <li><Link href="/"><i className="icon-5"></i></Link></li>
                  <li><Link href="/"><i className="icon-6"></i></Link></li>
                  <li><Link href="/"><i className="icon-7"></i></Link></li>
                </ul>
                <div className="btn-box">
                  <Link href="/contact#contact-form"><span>Appointment</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header lower */}
        <div className="header-lower">
          <div className="outer-box clearfix" style={{ padding: '0 15px' }}>
            <div className="logo-box">
              <figure className="logo">
                <Link href="/">
                  <img src="assets/images/logo.png" alt="Quintessence Logo" style={{ maxHeight: '60px' }} />
                </Link>
              </figure>
            </div>
            <div className="nav-outer clearfix">
              <div className="menu-area clearfix">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu} style={{ cursor: 'pointer' }}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <Menu />
                  </div>
                </nav>
              </div>
              <div className="support-box d-none d-xl-flex">
                <figure className="image-box"><img src="assets/images/resource/support-1.jpg" alt="" /></figure>
                <div className="support-info">
                  <span>Enquiries</span>
                  <Link href="tel:+919840369259">+91-9840369259</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header  */}
        <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" style={{ maxHeight: '50px' }} /></Link></figure>
              </div>
              <div className="menu-area clearfix">
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <Menu />
                  </div>
                </nav>
              </div>
              <div className="support-box d-none d-lg-flex">
                <div className="support-info" style={{ textAlign: 'right' }}>
                  <span>Enquiries</span>
                  <Link href="tel:+919840369259" style={{ fontSize: '16px', fontWeight: '700' }}>+91-9840369259</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  )
}
