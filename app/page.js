import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Features from "@/components/sections/home1/Features"
import News from "@/components/sections/home1/News"
import Countries from "@/components/sections/home3/Countries"
import Dream from "@/components/sections/home1/Dream"
import Coaching from "@/components/sections/home2/Coaching"
import Chooseus from "@/components/sections/home1/Chooseus"
import Help from "@/components/sections/home3/Help"
import Service from "@/components/sections/home1/Coaching"
import Team from "@/components/sections/home1/Team"
import Education from "@/components/sections/home1/Education"
import Passport from "@/components/sections/home1/Passport"
import Clients from "@/components/sections/home1/Clients"
import Visa from "@/components/sections/home2/Visa"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <About />
                <Service />
                {/* <Visa /> */}
                {/* <Features /> */}
                {/* <Dream /> */}
                <Countries />
                {/* <Coaching /> */}
                {/* <Chooseus /> */}
                {/* <Team /> */}
                {/* <Education /> */}
                {/* <Passport /> */}
                <Help />
                <Clients />
                <News />
                <SpeedInsights />
                   <Analytics />
            </Layout>
        </>
    )
}