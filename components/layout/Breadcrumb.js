import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, minimal = false }) {
    if (minimal) {
        return (
            <div className="auto-container" style={{ paddingTop: '20px', paddingBottom: '0' }}>
                <ul className="bread-crumb clearfix" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    listStyle: 'none', 
                    margin: 0, 
                    padding: 0,
                    fontSize: '14px',
                    fontWeight: '500'
                }}>
                    <li style={{ marginRight: '15px' }}>
                        <Link href="/" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.3s' }}
                           onMouseOver={(e) => e.target.style.color = '#fff200'}
                           onMouseOut={(e) => e.target.style.color = '#888'}
                        >Home</Link>
                    </li>
                    <li style={{ marginRight: '15px', color: '#ccc' }}>/</li>
                    <li style={{ color: '#1a2737', fontWeight: '700' }}>{breadcrumbTitle}</li>
                </ul>
            </div>
        )
    }

    return (
        <section className="page-hero-banner" style={{ 
            position: 'relative', 
            padding: '120px 0', 
            background: '#1a2737 url(assets/images/background/page-title.jpg) center center/cover no-repeat',
            textAlign: 'center'
        }}>
            {/* Dark Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.75)',
                zIndex: 1
            }}></div>
            
            <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Page Title */}
                <h1 style={{ 
                    color: '#fff', 
                    fontSize: '48px', 
                    lineHeight: '1.2',
                    fontWeight: '700', 
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}>{breadcrumbTitle}</h1>

                {/* Breadcrumb Trail Inside Banner */}
                <ul className="bread-crumb clearfix" style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center', 
                    listStyle: 'none', 
                    margin: 0, 
                    padding: 0,
                    fontSize: '16px',
                    fontWeight: '500'
                }}>
                    <li style={{ marginRight: '15px' }}>
                        <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                           onMouseOver={(e) => e.target.style.color = '#fff200'}
                           onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                        >Home</Link>
                    </li>
                    <li style={{ marginRight: '15px', color: 'rgba(255,255,255,0.4)' }}>/</li>
                    <li style={{ color: '#fff200', fontWeight: '700' }}>{breadcrumbTitle}</li>
                </ul>
            </div>
        </section>
    )
}


