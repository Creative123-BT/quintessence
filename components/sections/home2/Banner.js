'use client'
import Link from "next/link";
import React from 'react';
export default function Banner() {
  return (
    <section className="banner-style-two p_relative">
      <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
      <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
      <div className="auto-container">
        <div className="content-box p_relative d_block">
          <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
          <h2>Your Journey to <span>Global</span> Academic Excellence</h2>
          <p>At Quintessence, we bridge the gap between your aspirations and world-class education. From identifying the right universities to expert visa guidance, we ensure your path to success is seamless and certain.</p>
          <Link href="/about-us" className="theme-btn btn-one"><span>More Details</span></Link>
        </div>
      </div>
    </section>
  );
}

