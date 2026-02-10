import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/font-awesome-all.css"
import "../public/assets/css/bootstrap.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { heebo, maven_pro } from '@/lib/font'
export const metadata = {
    title: 'Quintessence - Your Gateway to Global Opportunities',
    description: 'Discover a world of possibilities with Quintessence. We specialize in helping individuals navigate the complexities of international migration and global opportunities. Whether you are seeking to study abroad, work overseas, or explore new horizons, Quintessence is your trusted partner. Our expert team provides personalized guidance and support to ensure a seamless transition to your desired destination. Unlock your potential and embark on a transformative journey with Quintessence today.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${maven_pro.variable} ${heebo.variable}`}>
            <body>{children}</body>
        </html>
    )
}
