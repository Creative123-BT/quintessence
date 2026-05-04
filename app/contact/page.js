'use client'
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout"

export default function Home() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitErrorMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = {
            username: formData.get("username")?.toString().trim() || "",
            email: formData.get("email")?.toString().trim() || "",
            phone: formData.get("phone")?.toString().trim() || "",
            subject: formData.get("subject")?.toString().trim() || "",
            preferredDestination: formData.get("preferredDestination")?.toString().trim() || "",
            studyLevel: formData.get("studyLevel")?.toString().trim() || "",
            intake: formData.get("intake")?.toString().trim() || "",
            message: formData.get("message")?.toString().trim() || "",
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result?.message || "Submission failed");
            }

            form.reset();
            setShowThankYouPopup(true);
        } catch (error) {
            setSubmitErrorMessage(error.message || "Unable to submit the form right now.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>



                    {/* Contact  Section  */}
                    <section className="contact-style-two p_relative" id="contact-form">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <div className="sec-title mb_30">
                                            <span className="sub-title">Quick Contact</span>
                                            <h2>Have Questions? <br />Reach Out to Our Experts</h2>
                                        </div>
                                        <div className="text mb_30">
                                            <p>Embarking on your international education journey can be complex. Whether you need clarity on university selection, visa processes, or financial planning, our expert counselors are ready to provide the personalized support you deserve.</p>
                                        </div>
                                        <div className="location-box pb_40 mb_40">
                                            <div className="icon-box"><i className="icon-61"></i></div>
                                            <h3>Our Location</h3>
                                            <p>Plot Number 20, Ambal Nagar, Pallikaranai, Chennai 600100</p>
                                        </div>
                                        <div className="inner-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box"><i className="icon-62"></i></div>
                                                        <h3>Quick Connect</h3>
                                                        <ul className="info-list clearfix">
                                                            <li>
                                                                <h5>Phone:</h5>
                                                                <p><Link href="tel:+919840369259 ">+91-9840369259</Link></p>
                                                            </li>
                                                            <li>
                                                                <h5>Email:</h5>
                                                                <p><Link href="mailto:support@quintessence-global.com">support@quintessence-global.com</Link></p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box"><i className="icon-63"></i></div>
                                                        <h3>Opening Hrs</h3>
                                                        <ul className="info-list clearfix">
                                                            <li>
                                                                <h5>Mon - Friday:</h5>
                                                                <p>09.00 am to 07.00 pm</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                    <div className="form-inner">
                                        <div className="sec-title mb_40">
                                            <span className="sub-title">Let's Connect</span>
                                            <h2>Send Your Message</h2>
                                        </div>
                                        <form onSubmit={handleSubmit} id="contact-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="username" placeholder="Name" required="" />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="email" name="email" placeholder="Email" required="" />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="phone" placeholder="Phone" required="" />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="subject" placeholder="Subject" required="" />
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                                    <select name="preferredDestination" required>
                                                        <option value="">Preferred Destination</option>
                                                        <option value="usa">USA</option>
                                                        <option value="uk">UK</option>
                                                        <option value="canada">Canada</option>
                                                        <option value="australia">Australia</option>
                                                        <option value="germany">Germany</option>
                                                        <option value="singapore">Singapore</option>
                                                        <option value="others">Others</option>

                                                    </select>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                                    <select name="studyLevel" required>
                                                        <option value="">Study Level</option>
                                                        <option value="bachelors">Bachelor's</option>
                                                        <option value="masters">Master's</option>
                                                        <option value="mba">MBA</option>
                                                        <option value="phd">PhD</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                                    <select name="intake" required>
                                                        <option value="">Intake</option>
                                                        <option value="spring">Spring</option>
                                                        <option value="summer">Summer</option>
                                                        <option value="fall">Fall</option>
                                                        <option value="winter">Winter</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea name="message" placeholder="Your message here"></textarea>
                                                </div>

                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-two" name="submit-form" disabled={isSubmitting}>
                                                        <span>{isSubmitting ? "Sending..." : "Message"}</span>
                                                    </button>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    {submitErrorMessage ? (
                                                        <p style={{ color: "#c62828", marginTop: "8px" }}>
                                                            {submitErrorMessage}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact  Section End */}
                    {/* Google Map Section */}
                    <section className="google-map-section p_relative">
                        {/*Map Outer*/}
                        <div className="auto-container">
                            <div className="map-inner p_relative d_block">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d743.2391155708051!2d80.19721347621446!3d12.935719797430123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzA3LjkiTiA4MMKwMTEnNDkuMCJF!5e1!3m2!1sen!2sin!4v1777879155347!5m2!1sen!2sin" height={450} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </section>
                    {/* Google Map Section End */}

                    {showThankYouPopup ? (
                        <div
                            style={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(26, 39, 55, 0.85)",
                                backdropFilter: "blur(8px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 99999,
                                padding: "20px",
                                animation: "fadeIn 0.3s ease-out"
                            }}
                            onClick={() => setShowThankYouPopup(false)}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    maxWidth: "450px",
                                    background: "#ffffff",
                                    borderRadius: "24px",
                                    padding: "40px 30px",
                                    textAlign: "center",
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                                onClick={(event) => event.stopPropagation()}
                            >
                                {/* Brand Accent Line */}
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "#f7d700" }}></div>
                                
                                <div style={{ 
                                    width: "80px", 
                                    height: "80px", 
                                    backgroundColor: "rgba(247, 215, 0, 0.15)", 
                                    borderRadius: "50%", 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    margin: "0 auto 24px" 
                                }}>
                                    <i className="fas fa-check" style={{ fontSize: "32px", color: "#f7d700" }}></i>
                                </div>

                                <h2 style={{ 
                                    fontSize: "32px", 
                                    fontWeight: "700", 
                                    color: "#1a2737", 
                                    marginBottom: "16px",
                                    fontFamily: "var(--title-font)"
                                }}>Message Sent!</h2>
                                
                                <p style={{ 
                                    fontSize: "17px", 
                                    lineHeight: "1.6", 
                                    color: "#5f6f84", 
                                    marginBottom: "30px" 
                                }}>
                                    Thank you for reaching out. One of our expert counselors will review your details and get back to you shortly.
                                </p>
                                
                                <button
                                    type="button"
                                    className="theme-btn btn-two"
                                    style={{ width: "100%", padding: "15px 30px" }}
                                    onClick={() => setShowThankYouPopup(false)}
                                >
                                    <span>Back to Website</span>
                                </button>
                            </div>
                        </div>
                    ) : null}

                </div>

            </Layout>
        </>
    )
}
