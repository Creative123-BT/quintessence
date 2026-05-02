'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link";
import React from 'react';
export default function About() {
    return (
        <section className="about-style-two p_relative">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-28.png)' }}></div>
                <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
            </div>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box"><img src="assets/images/resource/about-1.png" alt="" /></figure>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                            <div className="content-box">
                                <div className="sec-title mb_25">
                                    <span className="sub-title">About our Agency</span>
                                    <h2> Brand-Focused
                                        About Quintessence Study Abroad</h2>
                                </div>
                                <div className="text mb_35">
                                    <h5>Your gateway to world-class education</h5>
                                    <p>At Quintessence Study Abroad, we are a team of dedicated professionals passionate about making your international education dreams a reality. With years of experience in the education sector, we have helped hundreds of students achieve their goals. We specialize in helping students pursue higher education in top destinations, including the UK, USA, Australia, Canada, New Zealand, Germany, France, Ireland, Singapore, Dubai, and many more. </p>
                                    <p>Our personalized approach ensures that every student receives the support they need to succeed. From choosing the right course to visa assistance and post-arrival support, we are with you every step of the way. Our success is measured by your success, and we are committed to providing you with the best possible guidance and support throughout your journey.</p>
                                </div>
                                {/* <div className="funfact-inner centred">
                                    <div className="funfact-block">
                                        <div className="count-outer count-box">
                                            <CounterUp end={5} /><span>+</span>
                                        </div>
                                        <p>Countries</p>
                                    </div>
                                    <div className="funfact-block">
                                        <div className="count-outer count-box">
                                            <CounterUp end={15} /><span>+</span>
                                        </div>
                                        <p>Universities</p>
                                    </div>
                                    <div className="funfact-block">
                                        <div className="count-outer count-box">
                                            <CounterUp end={50} /><span>+</span>
                                        </div>
                                        <p>Happy Students</p>
                                    </div>
                                </div> */}
                                <div className="btn-box">
                                    <Link href="/about-us" className="theme-btn btn-two"><span>More Details</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

