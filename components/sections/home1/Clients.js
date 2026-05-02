'use client';

import Link from 'next/link';
import React from 'react';

export default function Clients() {
  const logos = [
    'Brown-University.png',
    'cambridge.png',
    'colombia.png',
    'cornell.png',
    'dartmouth.png',
    'harvard.png',
    'oxford.png',
    'penn.png',
    'princeton.png',
    'singapore.png',
    'stanford.png',
    'Sydney.png',
    'yale.png'
  ];

  const topRow = logos.slice(0, 7);
  const bottomRow = logos.slice(7, 13);

  return (
    <section className="clients-section p_relative">
      <div className="auto-container">
        <div className="inner-box p_relative pt_90">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Student-Centric Top Universities</span>
            <h2>Where Our Students Study.</h2>
          </div>
          <div className="clients-carousel-wrap">
            <div className="clients-marquee">
              <ul className="clients-track">
                {[...topRow, ...topRow].map((logo, index) => (
                  <li className="clients-logo-item" key={`top-${logo}-${index}`}>

                    <img src={`assets/images/clients/${logo}`} alt="University logo" />

                  </li>
                ))}
              </ul>
            </div>
            <div className="clients-marquee reverse">
              <ul className="clients-track">
                {[...bottomRow, ...bottomRow].map((logo, index) => (
                  <li className="clients-logo-item" key={`bottom-${logo}-${index}`}>

                    <img src={`assets/images/clients/${logo}`} alt="University logo" />

                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clients-carousel-wrap {
          position: relative;
          overflow: hidden;
          margin-bottom: 80px;
        }

        .clients-carousel-wrap::before,
        .clients-carousel-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .clients-carousel-wrap::before {
          left: 0;
          background:
            radial-gradient(circle at left center, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.62) 36%, rgba(255, 255, 255, 0) 78%),
            linear-gradient(to right, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0));
        }

        .clients-carousel-wrap::after {
          right: 0;
          background:
            radial-gradient(circle at right center, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.62) 36%, rgba(255, 255, 255, 0) 78%),
            linear-gradient(to left, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0));
        }

        .clients-marquee {
          overflow: hidden;
          margin-bottom: 38px;
        }

        .clients-marquee:last-child {
          margin-bottom: 0;
        }

        .clients-track {
          display: flex;
          align-items: center;
          gap: 48px;
          width: max-content;
          animation: clientsSlide 22s linear infinite;
        }

        .reverse .clients-track {
          animation-direction: reverse;
        }

        .clients-logo-item {
          width: 150px;
          flex: 0 0 auto;
          text-align: center;
        }

        .clients-logo-item img {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .clients-logo-item img:hover {
          transform: scale(1.05);
        }

        @keyframes clientsSlide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 767px) {
          .clients-carousel-wrap::before,
          .clients-carousel-wrap::after {
            width: 68px;
          }

          .clients-track {
            gap: 28px;
            animation-duration: 16s;
          }

          .clients-logo-item {
            width: 115px;
          }

          .clients-marquee {
            margin-bottom: 28px;
          }
        }
      `}</style>
    </section>
  );
};

