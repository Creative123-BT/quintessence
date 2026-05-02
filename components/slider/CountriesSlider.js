'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  }
}


const countries = [
  { name: "United Kingdom", flag: "flag-1.png", desc: "Access world-class education at prestigious institutions with a centuries-old academic legacy." },
  { name: "Canada", flag: "flag-2.png", desc: "Experience a multicultural environment with high-quality education and excellent career prospects." },
  { name: "United States", flag: "flag-3.png", desc: "Lead the way in innovation and research at some of the world's most renowned universities." },
  { name: "Australia", flag: "flag-4.png", desc: "Enjoy a high quality of life while studying at globally recognized institutions in a vibrant setting." },
  { name: "Germany", flag: "flag-5.png", desc: "Benefit from industry-aligned programs and exceptional engineering excellence with affordable fees." },
  { name: "France", flag: "flag-6.png", desc: "Immerse yourself in a rich culture while attending top-ranked business and arts schools." },
  { name: "Ireland", flag: "flag-7.png", desc: "Join a thriving tech ecosystem with exceptional post-study opportunities in global corporations." },
  { name: "New Zealand", flag: "flag-8.png", desc: "Focus on innovation and creative thinking in a safe, stunning, and supportive academic environment." },
  { name: "Singapore", flag: "flag-9.png", desc: "Study in a global financial hub at top-ranked universities bridging Eastern and Western excellence." },
  { name: "Dubai (UAE)", flag: "flag-10.png", desc: "Explore futuristic education at international branch campuses in a rapidly growing global hub." },
  { name: "Switzerland", flag: "flag-11.png", desc: "Master the art of hospitality and finance in the world's most elite and specialized institutions." },
  { name: "Netherlands", flag: "flag-12.png", desc: "Pioneer English-taught programs in Europe with a strong emphasis on research and critical analysis." },
  { name: "Italy", flag: "flag-13.png", desc: "Pursue excellence in design, arts, and architecture amidst a backdrop of unparalleled history." },
];


export default function CountriesSlider() {
  return (
    <div className="countries-slider-wrapper" style={{ position: 'relative', padding: '20px 0' }}>
      <Swiper {...swiperOptions} className="swiper-container nav-style-one">
        {countries.map((country, index) => (
          <SwiperSlide key={index} className="slide-item">
            <div className="countries-block-four">
              <div className="inner-box" style={{
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0',
                background: '#ffffff',
                height: '100%',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Hover Effect Background Layer */}
                <div className="hover-layer" style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  backgroundColor: '#f7d700',
                  transition: 'all 0.3s ease'
                }}></div>

                <div className="flag" style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  backgroundColor: '#fcfcfc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  border: '3px solid #fff'
                }}>
                  <img src={`assets/images/icons/${country.flag}`} alt={country.name} style={{ width: '50px', height: 'auto' }} />
                </div>

                <h3 style={{ marginBottom: '15px', fontWeight: '700', fontSize: '22px' }}>
                  <Link href="/contact" style={{ color: '#032f70', transition: '0.3s' }}>{country.name}</Link>
                </h3>

                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#666',
                  margin: 0,
                  flex: 1
                }}>{country.desc}</p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Controls */}
      <div className="owl-nav" style={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <button type="button" className="owl-prev h1p" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          border: 'none'
        }}>
          <span className="icon-10" style={{ color: '#032f70' }}></span>
        </button>
        <button type="button" className="owl-next h1n" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          border: 'none'
        }}>
          <span className="icon-11" style={{ color: '#032f70' }}></span>
        </button>
      </div>
    </div>
  );
}
