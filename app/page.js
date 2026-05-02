import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Countries from "@/components/sections/home3/Countries"
import Help from "@/components/sections/home3/Help"
import Service from "@/components/sections/home1/Coaching"
import Clients from "@/components/sections/home1/Clients"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <About />
                <Service />
                <Countries />
                <Help />
                <Clients />
                <SpeedInsights />
                <Analytics />
            </Layout>
        </>
    )
}