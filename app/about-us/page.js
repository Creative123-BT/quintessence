'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

import { useState } from 'react'
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(4)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-style-three about-page p_relative" style={{ padding: '100px 0', background: '#fff' }}>
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-42.png)' }}></div>
                        <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-69.png)' }}></div>
                    </div>

                    <div className="auto-container">
                        <div className="row align-items-center">
                            {/* Improved Image Column - Left Side */}
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box p_relative d_block mr_30">
                                    <figure className="image" style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                    }}>
                                        <img src="/assets/images/about/about.jpg" alt="Who we are" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                    </figure>
                                    {/* <div className="experience-box" style={{
                                        position: 'absolute',
                                        left: '-30px',
                                        bottom: '30px',
                                        background: '#f7d700',
                                        padding: '30px',
                                        borderRadius: '15px',
                                        boxShadow: '0 10px 30px rgba(247, 215, 0, 0.3)',
                                        zIndex: 2
                                    }}>
                                        <h2 style={{ fontSize: '40px', fontWeight: '800', margin: 0, color: '#1a2737' }}>25+</h2>
                                        <p style={{ margin: 0, fontWeight: '700', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px', color: '#1a2737' }}>Years of Experience</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* Refined Content Column - Right Side */}
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_six">
                                    <div className="content-box ml_30">
                                        <div className="sec-title mb_25">
                                            <span className="sub-title" style={{ color: '#f7d700', fontWeight: '700', letterSpacing: '2px' }}>WHO WE ARE</span>
                                            <h2 style={{ fontSize: '42px', lineHeight: '52px', fontWeight: '700' }}>Empowering Your Journey <br />to Global Education.</h2>
                                        </div>
                                        <div className="text mb_35">
                                            <p style={{ fontSize: '17px', lineHeight: '28px', color: '#666' }}>Quintessence is more than a consultancy; we are your dedicated partners in navigating the global academic landscape. With deep expertise in university selection, standardized testing, and visa processing, we provide a holistic roadmap for students aspiring to study at the world's most prestigious institutions.</p>
                                        </div>
                                        <div className="inner-box mb_45">
                                            <div className="single-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                                <div className="icon-box" style={{ marginRight: '15px', flexShrink: 0 }}>
                                                    <img src="assets/images/icons/icon-13.png" alt="" style={{ width: '40px' }} />
                                                </div>
                                                <h5 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Comprehensive mentorship for global university admissions.</h5>
                                            </div>
                                            <div className="single-item" style={{ display: 'flex', alignItems: 'center' }}>
                                                <div className="icon-box" style={{ marginRight: '15px', flexShrink: 0 }}>
                                                    <img src="assets/images/icons/icon-14.png" alt="" style={{ width: '40px' }} />
                                                </div>
                                                <h5 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Strategic test preparation and profile building excellence.</h5>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-section end */}
                {/* feature -section */}
                <section className="feature-section about-page alternat-3 pb_150">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-41.png)' }}></div>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-17"></i></div>
                                            <h3><Link href="/contact">Expert Counseling</Link></h3>
                                            <p>Personalized guidance to find the perfect university fit for your career.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-18"></i></div>
                                            <h3><Link href="/test-preparation">Test Prep Mastery</Link></h3>
                                            <p>Comprehensive coaching for SAT, GRE, GMAT, and proficiency exams.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-19"></i></div>
                                            <h3><Link href="/contact">Visa Excellence</Link></h3>
                                            <p>Strategic documentation support for seamless student visa approvals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-20"></i></div>
                                            <h3><Link href="/about-us">Career Roadmap</Link></h3>
                                            <p>Building long-term professional success beyond academic admissions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-section end */}



                {/* chooseus-section */}
                <section className="chooseus-section p_relative">
                    <div className="auto-container">
                        <div className="sec-title centred mb_60">
                            <span className="sub-title">Why Choose Us</span>
                            <h2>Tailored Guidance for Every <br />Student's Ambition.</h2>
                        </div>
                        <div className="row clearfix">
                            {/* Repeat for each chooseus block */}
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-1.png" alt="" /></div>
                                        <h3>Personalized Strategy</h3>
                                        <p>Custom roadmaps designed for your unique academic and career goals.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt="" /></div>
                                        <h3>Expert Mentorship</h3>
                                        <p>Insider guidance from seasoned educators and industry leaders.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                        <h3>High Success Rate</h3>
                                        <p>Consistent admissions into top-tier global universities and programs.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-4.png" alt="" /></div>
                                        <h3>End-to-End Support</h3>
                                        <p>Guidance at every milestone, from selection to post-arrival orientation.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* country 1 end*/}

                {/* clients-section */}
                {/* <section className="clients-section about-page alternat-2 p_relative">
                    <div className="auto-container">
                        <div className="inner-box p_relative pt_90">
                            <ul className="clients-list">
                                <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-1.png" alt="" /></Link></li>
                                <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-2.png" alt="" /></Link></li>
                                <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-3.png" alt="" /></Link></li>
                                <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-4.png" alt="" /></Link></li>
                                <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-5.png" alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </section> */}
                {/* clients-section */}
                {/* team-section */}
                <section className="team-section alternat-2 p_relative">
                    <div className="pattern-layer">
                        <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/shape-30.png)" }}></div>
                        <div className="pattern-5" style={{ backgroundImage: "url(assets/images/shape/shape-31.png)" }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="sec-title mb_50 centred">
                            <span className="sub-title">Expert Team Members</span>
                            <h2>Our Team at Your Service</h2>
                        </div>

                        {/* Advisory Board Member - Anand Jagannathan */}
                        <div
                            className="team-member-profile wow fadeInUp animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                            style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                                overflow: 'hidden'
                            }}
                        >
                            <div className="row clearfix align-items-stretch">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div style={{ padding: '50px 45px' }}>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                marginBottom: '12px',
                                                color: '#f7d700',
                                                fontWeight: '700',
                                                letterSpacing: '1px',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            Honorary Advisor
                                        </span>
                                        <h3 style={{ fontSize: '34px', lineHeight: '42px', marginBottom: '12px' }}>
                                            Anand Jagannathan
                                        </h3>
                                        <p style={{ margin: 0, color: '#f7d700', fontWeight: '600', fontSize: '16px', marginBottom: '24px' }}>
                                            Site Head, Engineering Leadership — Ruckus Networks<br />
                                            Chennai, Tamil Nadu, India
                                        </p>
                                        <p style={{ margin: 0, color: '#5f5f5f', lineHeight: '30px', fontSize: '16px', marginBottom: '24px' }}>
                                            With over 30 years of deep expertise in networking, datacenter technologies, and embedded systems, Anand Jagannathan brings a rare blend of hands-on engineering excellence and senior leadership to our advisory board. A patent holder and distinguished technologist, he has shaped engineering strategy at the highest levels across global organisations.
                                        </p>
                                        <div style={{ display: 'grid', gap: '18px' }}>
                                            <p style={{ margin: 0, color: '#5f5f5f', lineHeight: '30px', fontSize: '16px' }}>
                                                <strong>Areas of Expertise:</strong> Networking & Datacenter · Embedded Systems · Protocol Engineering · Linux & Software Development · Engineering Leadership · TCP/QoS Systems
                                            </p>
                                            <p style={{ margin: 0, color: '#5f5f5f', lineHeight: '30px', fontSize: '16px' }}>
                                                <strong>Career Highlights:</strong>
                                            </p>
                                            <ul style={{ margin: 0, paddingLeft: '24px', color: '#5f5f5f', lineHeight: '28px', fontSize: '16px' }}>
                                                <li>Site Head, Engineering Leadership at Ruckus Networks (2021–present)</li>
                                                <li>Head, Data Center Systems & Software at HCL Technologies (19 years)</li>
                                                <li>Manager, Software Development at GE Capital — VSAT & satellite communication systems</li>
                                                <li>Core team member on OPNET Modeler at Riverbed Technology</li>
                                                <li>Holds 2 patents in network acceleration and multicast transmission</li>
                                                <li>M.S. in Computer Science, University of North Carolina at Charlotte</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="team-member-profile wow fadeInUp animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                            style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                                overflow: 'hidden',
                                marginTop: '30px'
                            }}
                        >
                            <div className="row clearfix align-items-stretch">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div style={{ padding: '50px 45px' }}>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                marginBottom: '12px',
                                                color: '#f7d700',
                                                fontWeight: '700',
                                                letterSpacing: '1px',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            Strategic Head
                                        </span>
                                        <h3 style={{ fontSize: '34px', lineHeight: '42px', marginBottom: '20px' }}>
                                            Mr. Vinodh Kumar
                                        </h3>
                                        <div style={{ display: 'grid', gap: '18px' }}>
                                            <p style={{ margin: 0, color: '#5f5f5f', lineHeight: '30px', fontSize: '16px' }}>
                                                Vinodh Kumar is a seasoned Career Advisor with over 7+ years of experience guiding students toward achieving their study abroad goals. His expertise lies in providing comprehensive support for overseas education, from career planning and university selection to the seamless execution of admission processes. With an in-depth understanding of global education systems and trends, Vinodh ensures that students receive tailored guidance to match their academic and career aspirations.
                                            </p>
                                            <p style={{ margin: 0, color: '#5f5f5f', lineHeight: '30px', fontSize: '16px' }}>
                                                As the Strategic Head of Wheelers Global, Vinodh Kumar plays a pivotal role in overseeing the entire student counseling process, including admissions, course coordination, and skill-based service delivery. His strong organizational skills and focus on process streamlining have enabled him to create a structured and supportive environment that fosters student success. Under his leadership, Wheelers Global has become synonymous with personalized guidance and integrated support, empowering students to excel in competitive global academic landscapes.
                                            </p>
                                            <p style={{ margin: 0, color: '#5f5f5f', lineHeight: '30px', fontSize: '16px' }}>
                                                Vinodh is known for his hands-on approach and unwavering commitment to student development. He works closely with students and their families, offering insights into emerging opportunities, educational trends, and scholarship options. His proven experience and dedication make him a trusted name in the industry.
                                            </p>
                                            <p style={{ margin: 0, color: '#5f5f5f', lineHeight: '30px', fontSize: '16px' }}>
                                                In addition to his professional expertise, Vinodh Kumar is passionate about learning and staying updated on current trends in education. He actively reviews various research resources to integrate the latest advancements into his counseling strategies, ensuring that students receive the most up-to-date and relevant guidance.
                                            </p>
                                            <p style={{ margin: 0, color: '#5f5f5f', lineHeight: '30px', fontSize: '16px' }}>
                                                With a proven track record of success and an unwavering passion for student empowerment, Vinodh Kumar remains a trusted leader in the field of overseas education. His holistic approach ensures that every student receives the personalized support and expert guidance they need to turn their dreams of international education into reality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        </>
    )
}

