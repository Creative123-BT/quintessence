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
                            <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div className="image-box clearfix">
                                    <figure className="image"><img src="assets/images/Homepage/1-Profile-Evaluation.jpg" alt="Profile Evaluation" /></figure>
                                </div>
                                <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                                    <h3>Profile Evaluation <br />& Assessment</h3>
                                </div>
                                <div className="overlay-content">
                                    <h3>Profile Evaluation <br />& Assessment</h3>
                                    <p>Comprehensive analysis of academic credentials, extracurriculars, and career goals to identify the best-fit programs.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-one">
                            <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div className="image-box clearfix">
                                    <figure className="image"><img src="assets/images/Homepage/2-Shortlisting-University.jpg" alt="University Shortlisting" /></figure>
                                </div>
                                <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                                    <h3>Strategic University <br /> Shortlisting</h3>
                                </div>
                                <div className="overlay-content">
                                    <h3>Strategic University <br /> Shortlisting</h3>
                                    <p>Expert guidance in selecting a balanced mix of reach, target, and safety schools across global destinations.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-one">
                            <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div className="image-box clearfix">
                                    <figure className="image"><img src="assets/images/Homepage/3-Test-Prep.jpg" alt="Test Preparation" /></figure>
                                </div>
                                <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                                    <h3>Test Preparation <br /> Excellence</h3>
                                </div>
                                <div className="overlay-content">
                                    <h3>Test Preparation <br /> Excellence</h3>
                                    <p>Achieve top scores with our specialized training for GRE, GMAT, SAT, IELTS, TOEFL, and PTE exams.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-one">
                            <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div className="image-box clearfix">
                                    <figure className="image"><img src="assets/images/Homepage/4-Scholarship.jpg" alt="Scholarship Guidance" /></figure>
                                </div>
                                <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                                    <h3>Scholarship & <br /> Financial Aid</h3>
                                </div>
                                <div className="overlay-content">
                                    <h3>Scholarship & <br /> Financial Aid</h3>
                                    <p>Expert support in identifying and applying for merit-based scholarships and various financial aid opportunities.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-one">
                            <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div className="image-box clearfix">
                                    <figure className="image"><img src="assets/images/Homepage/5-Documentation.jpg" alt="Documentation" /></figure>
                                </div>
                                <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                                    <h3>Document Crafting <br /> & Editing</h3>
                                </div>
                                <div className="overlay-content">
                                    <h3>Document Crafting <br /> & Editing</h3>
                                    <p>Professional refinement of SOPs, LORs, and resumes to showcase your unique profile effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                        <div className="coaching-block-one">
                            <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div className="image-box clearfix">
                                    <figure className="image"><img src="assets/images/Homepage/6-Application-Submission-Review.jpg" alt="Application Review" /></figure>
                                </div>
                                <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                                    <h3>Application Review <br /> & Submission</h3>
                                </div>
                                <div className="overlay-content">
                                    <h3>Application Review <br /> & Submission</h3>
                                    <p>Meticulous verification and timely management of all application materials for a seamless submission process.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                    <div className="coaching-block-one">
                        <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div className="image-box clearfix">
                                <figure className="image"><img src="assets/images/Homepage/7-Interview.jpg" alt="Interview Prep" /></figure>
                            </div>
                            <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                                <h3>Interview Prep <br /> & Mock Sessions</h3>
                            </div>
                            <div className="overlay-content">
                                <h3>Interview Prep <br /> & Mock Sessions</h3>
                                <p>Confidence-building through simulated interviews and expert feedback to master your admission process.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                    <div className="coaching-block-one">
                        <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div className="image-box clearfix">
                                <figure className="image"><img src="assets/images/Homepage/8-Visa-and-Loan.jpg" alt="Visa & Loans" /></figure>
                            </div>
                            <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                                <h3>Visa & Loan <br /> Consultation</h3>
                            </div>
                            <div className="overlay-content">
                                <h3>Visa & Loan <br /> Consultation</h3>
                                <p>Comprehensive guidance through visa procedures and documentation for a stress-free travel experience.</p>

                            </div>
                        </div>
                    </div>
                </div>

            <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                    <div className="inner-box" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <div className="image-box clearfix">
                            <figure className="image"><img src="assets/images/Homepage/9-Arrival.jpg" alt="Post-Arrival Support" /></figure>
                        </div>
                        <div className="static-content" style={{ borderRadius: '0 15px 0 0' }}>
                            <h3>Departure & <br /> Arrival Support</h3>
                        </div>
                        <div className="overlay-content">
                            <h3>Departure & <br /> Arrival Support</h3>
                            <p>From travel arrangements to accommodation, we ensure a smooth transition to your new academic life.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </section>
    );
}

