import Link from 'next/link';
import React from 'react';

export default function Coaching() {
  return (
    <section className="coaching-section pt-0">
      {/* <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div> */}
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Services</span>
          <h2>Your Roadmap to Global Academic Success</h2>
        </div>
        <div className="row clearfix g-4">
          {/* Repeat this block structure for each coaching block */}
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
            <div className="coaching-block-one">
              <div className="inner-box">
                <div className="image-box clearfix">
                  <figure className="image"><img src="assets/images/resource/coaching-1.jpg" alt="" /></figure>
                  <figure className="image"><img src="assets/images/resource/coaching-2.jpg" alt="" /></figure>
                </div>
                <div className="static-content">
                  <h3>Profile Evaluation <br />& Assessment</h3>
                  <div className="link"><a href="coaching-details-3"><i className="icon-9"></i></a></div>
                </div>
                <div className="overlay-content">
                  <h3><Link href="coaching-details-3">Profile Evaluation & Assessment</Link></h3>
                  <p>Comprehensive analysis of your academic credentials, extracurricular achievements, and career aspirations to identify the most suitable universities and programs aligned with your goals.
</p>
                  <div className="link"><Link href="coaching-details-3"><i className="icon-9"></i></Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box">
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/resource/coaching-3.jpg" alt="" /></figure>
                            <figure className="image"><img src="assets/images/resource/coaching-4.jpg" alt="" /></figure>
                        </div>
                        <div className="static-content">
                            <h3>Strategic University <br /> Shortlisting</h3>
                            <div className="link"><Link href="coaching-details-2"><i className="icon-9"></i></Link></div>
                        </div>
                        <div className="overlay-content">
                            <h3><a href="coaching-details-2">Strategic University Shortlisting</a></h3>
                            <p>Expert guidance in selecting the right combination of reach, target, and safety schools across your preferred destinations, ensuring a balanced and competitive application strategy.
.</p>
                            <div className="link"><Link href="coaching-details-2"><i className="icon-9"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box">
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                            <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                        </div>
                        <div className="static-content">
                            <h3>Test Preparation  <br />Excellence</h3>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                        <div className="overlay-content">
                            <h3><a href="/">Test Preparation Excellence</a></h3>
                            <p>Access to premium preparation resources for GMAT, GRE, SAT, ACT, TOEFL, IELTS, PTE, Duolingo, and other standardized tests to achieve scores that strengthen your candidacy.
.</p>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
                       <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box">
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                            <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                        </div>
                        <div className="static-content">
                            <h3>Scholarship Guidance</h3>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                        <div className="overlay-content">
                            <h3><a href="/">Scholarship & Financial Aid Guidance</a></h3>
                            <p> Identification of merit-based scholarships, assistantships, and funding opportunities, along with comprehensive support in crafting competitive scholarship applications.
</p>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
                       <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box">
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                            <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                        </div>
                        <div className="static-content">
                            <h3>Document Crafting & <br /> Editing</h3>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                        <div className="overlay-content">
                            <h3><a href="/">Document Crafting & Editing</a></h3>
                            <p> Professional refinement of your Statement of Purpose, Letters of Recommendation, resume, and essays to create a compelling narrative that showcases your unique strengths and potential.
</p>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
                       <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box">
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                            <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                        </div>
                        <div className="static-content">
                            <h3>Application Review <br /> & Submission</h3>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                        <div className="overlay-content">
                            <h3><a href="/">Application Review & Submission</a></h3>
                            <p> Meticulous verification of all application materials to ensure completeness, accuracy, and adherence to university-specific requirements, with timely submission management.
</p>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
                       <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box">
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                            <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                        </div>
                        <div className="static-content">
                            <h3>Interview Preparation <br /> & Mock Sessions</h3>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                        <div className="overlay-content">
                            <h3><a href="/">Interview Preparation & Mock Sessions</a></h3>
                            <p>Personalized coaching with simulated interview experiences, expert feedback, and proven techniques to help you confidently articulate your story during admissions interviews.
</p>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
                       <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box">
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                            <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                        </div>
                        <div className="static-content">
                            <h3>Visa Consultation <br /> & Documentation</h3>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                        <div className="overlay-content">
                            <h3><a href="/">Visa Consultation & Documentation</a></h3>
                            <p> Step-by-step guidance through visa application procedures, document preparation, interview coaching, and compliance requirements for your destination country.
</p>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
                       <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box">
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                            <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                        </div>
                        <div className="static-content">
                            <h3>Pre-Departure  <br />& Post-Arrival Support</h3>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                        <div className="overlay-content">
                            <h3><a href="/">Pre-Departure & Post-Arrival Support</a></h3>
                            <p>Comprehensive assistance covering travel arrangements, accommodation options, cultural orientation, airport pickup, and settling-in services to ensure a smooth transition to your new academic environment.</p>
                            <div className="link"><Link href="/"><i className="icon-9"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

