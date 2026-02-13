'use client'
import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <footer className="main-footer" id="footer">
        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix d-flex align-items-center justify-content-between">
              <div className="col-lg-9 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo"><Link href="/"><img src="assets/images/footer-logo.png" alt="" /></Link></figure>
                  <div className="text mb_25">
                    <p>Your trusted partner in shaping global academic futures</p>
                  </div>

                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <ul className="info clearfix mb_30">
                    <li><i className="icon-29"></i><Link href="tel:88123456987231">+88 12345 6987 231</Link></li>
                    <li><i className="icon-1"></i><Link href="mailto:info@example.com">info@example.com</Link></li>
                    <li><i className="icon-2"></i>380 St Kilda Road, Melbourne</li>
                  </ul>
                  <ul className="social-links clearfix">
                    <li><Link href="/"><i className="icon-4"></i></Link></li>
                    <li><Link href="/"><i className="icon-5"></i></Link></li>
                    <li><Link href="/"><i className="icon-6"></i></Link></li>
                    <li><Link href="/"><i className="icon-7"></i></Link></li>
                  </ul>
                </div>
              </div>

         

            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>
                Copyright © {new Date().getFullYear()} Quintessence Study Abroad. All Rights Reserved.
              </p>
            </div>

            <div className="legal-links">
              <a href="/">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/">Terms & Conditions</a>
              <span className="separator">|</span>
              <a href="/">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
