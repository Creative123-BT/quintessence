import Link from 'next/link';
import React from 'react';

export default function Help() {
  return (
    <section className="help-section p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-45.png)' }}></div>
        {/* <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-46.png)' }}></div> */}
        <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title light mb_60">
          <span className="sub-title">HOW WE HELP STUDENTS</span>
          <h2>Your Seamless Path to <br />International Education</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon mb_18"><i className="icon-42"></i></div>
                  <span className="count-text">01</span>
                </div>
                <h3><Link href="/contact">Personalized <br />Guidance</Link></h3>
                <p>We analyze your academic profile to provide a customized roadmap for your journey.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count-text">02</span>
                  <div className="icon mt_18"><i className="icon-43"></i></div>
                </div>
                <h3><Link href="/contact">Strategic <br />Shortlisting</Link></h3>
                <p>Our experts help you select ideal universities and courses that match your aspirations.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon mb_13"><i className="icon-44"></i></div>
                  <span className="count-text">03</span>
                </div>
                <h3><Link href="/contact">Seamless <br />Transitions</Link></h3>
                <p>From application review to visa approval, we manage every detail for your success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

