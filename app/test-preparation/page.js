'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { useState, useEffect, useRef } from 'react'

// Exam Categories Data
const examCategories = [
    {
        id: 'sat',
        short: 'SAT',
        title: 'SAT (Scholastic Assessment Test)',
        what: 'The SAT is a standardized test widely used for college admissions in the United States. It assesses your readiness for college and provides colleges with a common data point for comparing all applicants.',
        who: [
            'Students applying to undergraduate programs in the US, Canada, and some international universities',
            'High school students (typically in grades 11-12)'
        ],
        structure: [
            { label: 'Evidence-Based Reading and Writing', duration: '100 min' },
            { label: 'Math', duration: '80 min' },
            { label: 'Optional Essay', duration: '50 min' }
        ],
        score: 'Total Score: 400-1600',
        program: [
            'Comprehensive study materials and practice tests',
            'Strategic test-taking techniques',
            'Section-wise skill development',
            'Regular mock tests with detailed performance analysis',
            'Personalized study plans'
        ],
        faqs: [
            { q: 'When can I take the SAT?', a: 'The SAT is offered several times a year (typically August, October, December, March, May, and June).' },
            { q: 'Is the SAT paper-based or digital?', a: 'The SAT is now fully digital (Digital SAT) worldwide, taken on a laptop or tablet.' },
            { q: 'What is a good SAT score?', a: 'While it depends on the university, a score of 1300+ is competitive for most colleges, while 1500+ is needed for Ivy League schools.' },
            { q: 'How long are SAT scores valid?', a: 'SAT scores are valid for 5 years from your test date.' },
            { q: 'Can I take the SAT more than once?', a: 'Yes, most students take it at least twice. We recommend taking it once in the spring of junior year and once in the fall of senior year.' }
        ]
    },
    {
        id: 'psat',
        short: 'PSAT',
        title: 'PSAT (Preliminary SAT)',
        what: 'The PSAT is a practice version of the SAT that also serves as the qualifying test for the National Merit Scholarship Program.',
        who: [
            'High school students in grades 10-11',
            'Students preparing for the SAT',
            'Students seeking National Merit Scholarships'
        ],
        structure: [
            { label: 'Reading', duration: '60 min' },
            { label: 'Writing and Language', duration: '35 min' },
            { label: 'Math', duration: '70 min' }
        ],
        score: 'Total Score: 320-1520',
        program: [
            'Foundation building for SAT success',
            'Scholarship qualification strategies',
            'Practice tests aligned with PSAT format',
            'Score improvement techniques'
        ],
        target: 'Success in PSAT paves the way for National Merit Scholarship opportunities.',
        faqs: [
            { q: 'Does the PSAT score affect college admission?', a: 'No, but it is the only way to qualify for National Merit Scholarships and is great practice for the SAT.' },
            { q: 'When is the PSAT held?', a: 'It is typically held once a year in October.' },
            { q: 'What is the National Merit Scholarship?', a: 'It is a prestigious scholarship program for high school students in the US based on their PSAT/NMSQT scores.' },
            { q: 'How is PSAT different from SAT?', a: 'The PSAT is slightly shorter and doesn\'t include the some advanced math topics found on the SAT.' }
        ]
    },
    {
        id: 'act',
        short: 'ACT',
        title: 'ACT (American College Testing)',
        what: 'The ACT is a standardized test used for college admissions in the United States, assessing high school achievement and college readiness.',
        who: [
            'Students applying to undergraduate programs in the US',
            'Alternative to SAT for college admissions'
        ],
        structure: [
            { label: 'English', duration: '45 min' },
            { label: 'Math', duration: '60 min' },
            { label: 'Reading', duration: '35 min' },
            { label: 'Science', duration: '35 min' }
        ],
        score: 'Total Score: 1-36 (composite)',
        program: [
            'Comprehensive coverage of all four sections',
            'Science reasoning strategies',
            'Time management techniques',
            'Full-length practice tests'
        ],
        target: 'We help you achieve competitive scores (typically 24-36) for top-tier universities.',
        faqs: [
            { q: 'Should I take the SAT or ACT?', a: 'Both are equally accepted. The ACT is often preferred by students who are strong in science and can work quickly under time pressure.' },
            { q: 'Is there a penalty for wrong answers on the ACT?', a: 'No, there is no guessing penalty on the ACT.' },
            { q: 'What is the highest possible ACT score?', a: 'The maximum composite score is 36.' },
            { q: 'How many sections are in the ACT?', a: 'There are four mandatory sections: English, Math, Reading, and Science, plus an optional Writing section.' }
        ]
    },
    {
        id: 'gre',
        short: 'GRE',
        title: 'GRE (Graduate Record Examination)',
        what: 'The GRE General Test is a standardized exam required for admission to most graduate programs, including master\'s and doctoral degrees worldwide.',
        who: [
            'Students applying to graduate programs (Master\'s, MBA, PhD)',
            'Primarily for programs in the US, UK, Canada, and Europe'
        ],
        structure: [
            { label: 'Analytical Writing', duration: '60 min' },
            { label: 'Verbal Reasoning', duration: '60 min' },
            { label: 'Quantitative Reasoning', duration: '70 min' }
        ],
        score: 'Score Range: 260-340 + 0-6 Writing',
        program: [
            'Vocabulary building and verbal reasoning strategies',
            'Quantitative problem-solving techniques',
            'Analytical writing essay frameworks',
            'Official practice tests and mock exams'
        ],
        target: 'We prepare you for competitive scores (typically 310-340) based on your target program.',
        faqs: [
            { q: 'How long are GRE scores valid?', a: 'GRE scores are valid for 5 years from your test date.' },
            { q: 'Can I retake the GRE?', a: 'Yes, you can take the GRE once every 21 days, up to five times within any continuous rolling 12-month period.' },
            { q: 'What math is on the GRE?', a: 'The GRE Quantitative Reasoning section covers high school-level arithmetic, algebra, geometry, and data analysis.' },
            { q: 'Which graduate programs require the GRE?', a: 'Most Master\'s and Ph.D. programs in the US and many worldwide require the GRE General Test.' }
        ]
    },
    {
        id: 'gmat',
        short: 'GMAT',
        title: 'GMAT (Graduate Management Admission Test)',
        what: 'The GMAT is specifically designed for admission to graduate business and management programs (MBA, MS in Management, etc.).',
        who: [
            'Students applying to MBA programs',
            'Applicants to specialized master\'s programs in business'
        ],
        structure: [
            { label: 'Analytical Writing Assessment', duration: '30 min' },
            { label: 'Integrated Reasoning', duration: '30 min' },
            { label: 'Quantitative Reasoning', duration: '62 min' },
            { label: 'Verbal Reasoning', duration: '65 min' }
        ],
        score: 'Total Score: 205-805',
        program: [
            'Business-focused quantitative and verbal training',
            'Data sufficiency and critical reasoning mastery',
            'Integrated reasoning strategies',
            'Mock tests and interview prep'
        ],
        target: 'We help you achieve competitive GMAT scores (650-780) for top-ranked business schools.',
        faqs: [
            { q: 'What is the "Focus Edition" of GMAT?', a: 'The GMAT Focus Edition is the current version, which is shorter and more streamlined than the previous GMAT exam.' },
            { q: 'Do business schools prefer GRE or GMAT?', a: 'Most top business schools now accept both equally, though GMAT is still the most widely used specifically for MBA admissions.' },
            { q: 'How long is the GMAT Focus Edition?', a: 'The GMAT Focus Edition is 2 hours and 15 minutes long.' },
            { q: 'Can I use a calculator on the GMAT?', a: 'You can use an on-screen calculator only during the Data Insights section.' }
        ]
    },
    {
        id: 'ielts',
        short: 'IELTS',
        title: 'IELTS (International English Language Testing System)',
        what: 'IELTS is the world\'s most popular English language proficiency test for study, work, and migration, accepted by over 11,000 organizations worldwide.',
        who: [
            'Students applying to universities in the UK, Australia, Canada, NZ',
            'Required for visa applications in many countries'
        ],
        structure: [
            { label: 'Listening', duration: '30 min' },
            { label: 'Reading', duration: '60 min' },
            { label: 'Writing', duration: '60 min' },
            { label: 'Speaking', duration: '11-14 min' }
        ],
        score: 'Band Score: 0-9',
        program: [
            'All four skills training',
            'British and Australian accent familiarization',
            'Writing Task 1 & 2 templates',
            'Speaking fluency and confidence building'
        ],
        target: 'We help you achieve band scores of 6.5-8.5 based on university requirements.',
        faqs: [
            { q: 'Should I take IELTS Academic or General Training?', a: 'Academic is for university study; General Training is typically for migration and work purposes.' },
            { q: 'Is the IELTS Speaking test with a human?', a: 'Yes, both paper and computer versions feature a face-to-face interview with a certified examiner.' },
            { q: 'How many times can I take IELTS?', a: 'There is no limit to how many times you can take the IELTS test.' },
            { q: 'How long is the IELTS result valid?', a: 'IELTS results are typically valid for 2 years.' }
        ]
    },
    {
        id: 'toefl',
        short: 'TOEFL',
        title: 'TOEFL (Test of English as a Foreign Language)',
        what: 'TOEFL measures English language proficiency, primarily accepted by universities in the United States and Canada.',
        who: [
            'Students applying to universities in the US and Canada',
            'Non-native English speakers'
        ],
        structure: [
            { label: 'Reading', duration: '54-72 min' },
            { label: 'Listening', duration: '41-57 min' },
            { label: 'Speaking', duration: '17 min' },
            { label: 'Writing', duration: '50 min' }
        ],
        score: 'Total Score: 0-120',
        program: [
            'Integrated skills training',
            'Note-taking and paraphrasing techniques',
            'Speaking response templates',
            'Academic writing strategies'
        ],
        target: 'We prepare you for scores of 90-120 to meet top university requirements.',
        faqs: [
            { q: 'How is TOEFL different from IELTS?', a: 'TOEFL is more academic-focused and taken on a computer. The speaking section involves recording your voice into a microphone rather than a human interview.' },
            { q: 'Where is TOEFL accepted?', a: 'It is the primary test accepted by US and Canadian universities.' },
            { q: 'What is the maximum TOEFL iBT score?', a: 'The max score is 120 (30 points for each of the four sections).' },
            { q: 'Is the TOEFL Home Edition accepted by all universities?', a: 'Many universities accept it, but you should always check the specific requirements of your target institution.' }
        ]
    },
    {
        id: 'ap',
        short: 'AP',
        title: 'AP (Advanced Placement)',
        what: 'AP courses and exams allow high school students to earn college credit and demonstrate academic excellence in specific subjects.',
        who: [
            'High school students seeking college credit',
            'Students wanting to strengthen their university applications'
        ],
        structure: [
            { label: 'Popular Subjects', duration: 'Calculus, Physics, Bio, History, CS' }
        ],
        score: 'Score Range: 1-5',
        program: [
            'Subject-specific expert instructors',
            'Comprehensive content review',
            'Practice exams and FRQ training',
            'College credit maximization'
        ],
        target: 'We help you achieve scores of 4-5 for maximum college credit.',
        faqs: [
            { q: 'How many AP exams should I take?', a: 'It depends on your university goals. Most competitive students take 3-5 AP exams over their high school years.' },
            { q: 'Does a 4 or 5 guarantee college credit?', a: 'Most US universities grant credit for 4s and 5s, though some private colleges have stricter requirements.' },
            { q: 'When are AP exams held?', a: 'They are held once a year in May.' },
            { q: 'Can I take an AP exam without taking the course?', a: 'Yes, you can "self-study" and register for AP exams as an independent student.' }
        ]
    },
    {
        id: 'pte',
        short: 'PTE',
        title: 'PTE (Pearson Test of English)',
        what: 'PTE Academic is a computer-based English language proficiency test accepted by thousands of universities worldwide (AU, NZ, UK).',
        who: [
            'Students applying to universities accepting PTE',
            'Applicants seeking faster test results (within 48 hours)'
        ],
        structure: [
            { label: 'Speaking & Writing', duration: '54-67 min' },
            { label: 'Reading', duration: '29-30 min' },
            { label: 'Listening', duration: '30-43 min' }
        ],
        score: 'Score Range: 10-90',
        program: [
            'AI-based scoring practice',
            'Integrated skills training',
            'Computer delivery familiarization',
            'Template-based strategies for speaking and writing'
        ],
        target: 'We help you achieve scores of 58-90 based on university requirements.',
        faqs: [
            { q: 'How fast do I get PTE results?', a: 'Typically within 48 hours, which is much faster than IELTS or TOEFL.' },
            { q: 'Is PTE easier than IELTS?', a: 'Many students find PTE easier because it is fully computer-graded, but it requires familiarity with specific AI-based scoring patterns.' },
            { q: 'Is PTE accepted for Australian PR?', a: 'Yes, PTE Academic is widely accepted for Australian and New Zealand visa and migration purposes.' },
            { q: 'What is a good PTE score for a Master’s degree?', a: 'Most universities require a score of 58 or above (equivalent to IELTS 6.5).' }
        ]
    }
];

export default function Home() {
    const [activeExam, setActiveExam] = useState('sat');
    const [openFaq, setOpenFaq] = useState(0);
    const navRef = useRef(null);
    const contentRef = useRef(null);

    const activeExamData = examCategories.find(exam => exam.id === activeExam);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Test Preparation">
                {/* Custom Premium Hero Section restored */}
                <section className="premium-hero">
                    <div className="auto-container">
                        <div className="hero-split">
                            <div className="hero-text-side">
                                <div className="hero-content">
                                    <h1>Elevate Your Test Prep Performance</h1>
                                    <p>Join Quintessence for expert-led coaching across SAT, GRE, GMAT, and proficiency exams. Our personalized strategies are designed to help you hit your target score and secure your dream future.</p>
                                    <div className="hero-cta">
                                        <Link href="/contact" className="btn-bt-consult">Book Free Consultation</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-img-side">
                                <img src="assets/images/resource/hero-side-img.png" alt="Study Abroad Coaching" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* coaching details navigation section - Sticky with Scroll Indicator */}
                <div
                    ref={navRef}
                    className="sticky-category-nav-outer"
                    style={{
                        position: 'sticky',
                        top: '68px',
                        zIndex: '99',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        marginTop: '0px',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.05)'
                    }}
                >
                    <div className="auto-container" style={{ position: 'relative' }}>
                        {/* Scroll hint gradient - Right */}
                        <div style={{
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            bottom: '0',
                            width: '40px',
                            background: 'linear-gradient(to left, rgba(255,255,255,0.95), rgba(255,255,255,0))',
                            zIndex: '2',
                            pointerEvents: 'none',
                            borderRadius: '0 30px 30px 0'
                        }}></div>

                        <div className="tab-btn-box" style={{
                            overflowX: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                            padding: '12px 0'
                        }}>
                            <ul className="tab-btns centred clearfix" style={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                justifyContent: 'center',
                                minWidth: 'max-content',
                                padding: '0 30px'
                            }}>
                                {examCategories.map((exam) => (
                                    <li
                                        key={exam.id}
                                        className={`${activeExam === exam.id ? 'active-btn' : ''}`}
                                        style={{
                                            whiteSpace: 'nowrap',
                                            margin: '0 5px',
                                            flexShrink: 0,
                                            padding: '10px 22px',
                                            fontSize: '14px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            borderRadius: '25px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            background: 'transparent',
                                            color: activeExam === exam.id ? '#1a2737' : '#555',
                                            borderBottom: activeExam === exam.id ? '5px solid #fff200' : '5px solid transparent',
                                            borderRadius: '0px',
                                            transform: activeExam === exam.id ? 'translateY(-2px)' : 'none',
                                            boxShadow: 'none'
                                        }}
                                        onClick={() => {
                                            setActiveExam(exam.id);
                                            // Scroll to the content section top, accounting for the sticky header + sticky bar
                                            const targetScroll = contentRef.current.offsetTop - 150;
                                            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                                        }}
                                    >
                                        {exam.short}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* coaching details section - Redesigned Card Layout */}
                <section ref={contentRef} className="coaching-details-section" style={{ padding: '60px 0', background: '#f8f9fa' }}>
                    <div className="auto-container">
                        {activeExamData && (
                            <div className="coaching-details-grid-wrapper">

                                {/* 1. Intro Header Card */}
                                <div className="detail-card intro-card" style={{ background: '#fff', borderRadius: '20px', padding: '40px', marginBottom: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a2737', marginBottom: '20px' }}>{activeExamData.title}</h2>
                                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>{activeExamData.what}</p>
                                        </div>
                                        <div className="col-lg-4 d-none d-lg-block">
                                        <div className="target-score-badge" style={{ background: '#fff200', padding: '25px', borderRadius: '15px', textAlign: 'center' }}>
                                                <h4 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', color: '#1a2737' }}>Target Score</h4>
                                                <div style={{ fontSize: '28px', fontWeight: '900', color: '#1a2737' }}>{activeExamData.score.split(': ')[1]}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row clearfix">
                                    {/* 2. Left Column: Structure and Audience */}
                                    <div className="col-lg-7 col-md-12 col-sm-12">
                                        <div className="detail-card info-card" style={{ background: '#fff', borderRadius: '20px', padding: '35px', marginBottom: '30px', height: '100%', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '25px', borderLeft: '5px solid #fff200', paddingLeft: '15px' }}>Test Structure</h3>
                                            <div className="structure-table-wrapper" style={{ overflowX: 'auto' }}>
                                                <table className="table table-borderless" style={{ background: '#fcfcfc', borderRadius: '12px' }}>
                                                    <thead>
                                                        <tr style={{ borderBottom: '2px solid #eee' }}>
                                                            <th style={{ padding: '15px' }}>Section</th>
                                                            <th style={{ padding: '15px' }}>Duration</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {activeExamData.structure.map((item, id) => (
                                                            <tr key={id}>
                                                                <td style={{ padding: '15px', fontWeight: '600' }}>{item.label}</td>
                                                                <td style={{ padding: '15px', color: '#666' }}>{item.duration}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginTop: '35px', marginBottom: '25px', borderLeft: '5px solid #fff200', paddingLeft: '15px' }}>Who Should Take It?</h3>
                                            <ul className="target-list" style={{ listStyle: 'none', padding: 0 }}>
                                                {activeExamData.who.map((item, id) => (
                                                    <li key={id} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                                                        <span style={{ minWidth: '24px', height: '24px', borderRadius: '50%', background: '#fff200', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', marginTop: '3px' }}>
                                                            <i className="fas fa-check" style={{ color: '#fff', fontSize: '10px' }}></i>
                                                        </span>
                                                        <span style={{ fontSize: '16px', color: '#444' }}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* 3. Right Column: Our Program */}
                                    <div className="col-lg-5 col-md-12 col-sm-12">
                                        <div className="detail-card program-card" style={{ background: '#1a2737', borderRadius: '20px', padding: '35px', color: '#fff', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '25px', color: '#fff200' }}>Our Preparation Highlights</h3>
                                            <ul className="program-list" style={{ listStyle: 'none', padding: 0 }}>
                                                {activeExamData.program.map((item, id) => (
                                                    <li key={id} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                                                        <i className="fas fa-arrow-right" style={{ color: '#fff200', marginTop: '5px', marginRight: '15px' }}></i>
                                                        <span style={{ fontSize: '16px', lineHeight: '1.6' }}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                                <p style={{ margin: 0, fontStyle: 'italic', opacity: '0.8' }}>{activeExamData.target}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section p_relative" style={{ background: '#fafafa', padding: '80px 0' }}>
                    <div className="auto-container">
                        <div className="sec-title centred">
                            <span className="sub-title">Have Questions?</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq-container" style={{ maxWidth: '900px', margin: '40px auto 0 auto' }}>
                            {(activeExamData.faqs || [
                                { q: 'Which English test should I take - IELTS, TOEFL, or PTE?', a: 'It depends on your destination country and university requirements. We\'ll help you choose based on your target institutions.' },
                                { q: 'How long should I prepare for these tests?', a: 'Typically 2-3 months for English proficiency tests and 3-4 months for GRE/GMAT/SAT, depending on your current level.' },
                                { q: 'Do you offer online test preparation?', a: 'Yes, we offer both online and in-person classes with flexible schedules.' },
                                { q: 'Can I retake these tests if I don\'t get my desired score?', a: 'Yes, most tests allow retakes. We\'ll guide you on retake strategies.' }
                            ]).map((faq, id) => (
                                <div key={id} className={`faq-box ${openFaq === id ? 'active' : ''}`} style={{ background: '#fff', borderRadius: '10px', marginBottom: '20px', border: '1px solid #eee', overflow: 'hidden' }}>
                                    <div className="faq-header" onClick={() => toggleFaq(id)} style={{ padding: '25px 35px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>{faq.q}</h5>
                                        <i className={`fas fa-chevron-${openFaq === id ? 'up' : 'down'}`} style={{ color: '#bfb600' }}></i>
                                    </div>
                                    {openFaq === id && (
                                        <div className="faq-body" style={{ padding: '0 35px 25px 35px', color: '#666', fontSize: '16px', lineHeight: '1.7' }}>
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
