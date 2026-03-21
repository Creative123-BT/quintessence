'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Menu() {
    const pathname = usePathname()

    return (
        <>
            <ul className="navigation clearfix">
                <li style={{ borderBottom: pathname === "/" ? "4px solid #fff200" : "4px solid transparent", transition: 'all 0.3s ease', paddingBottom: '2px' }}>
                    <Link href="/" style={{ fontWeight: pathname === "/" ? "700" : "500" }}>Home</Link>
                </li>
                <li style={{ borderBottom: pathname === "/about-us" ? "4px solid #fff200" : "4px solid transparent", transition: 'all 0.3s ease', paddingBottom: '2px' }}>
                    <Link href="/about-us" style={{ fontWeight: pathname === "/about-us" ? "700" : "500" }}>About Us</Link>
                </li>
                <li style={{ borderBottom: pathname === "/test-preparation" ? "4px solid #fff200" : "4px solid transparent", transition: 'all 0.3s ease', paddingBottom: '2px' }}>
                    <Link href="/test-preparation" style={{ fontWeight: pathname === "/test-preparation" ? "700" : "500" }}>Test Preparation</Link>
                </li>
                <li style={{ borderBottom: pathname === "/contact" ? "4px solid #fff200" : "4px solid transparent", transition: 'all 0.3s ease', paddingBottom: '2px' }}>
                    <Link href="/contact" style={{ fontWeight: pathname === "/contact" ? "700" : "500" }}>Contact Us</Link>
                </li>
            </ul>
        </>
    )
}
