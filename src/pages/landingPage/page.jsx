import Clients from "./sections/clients"
import FAQs from "./sections/faqs"
import Footer from "./sections/footer"
import Hero from "./sections/hero"
import Industries from "./sections/industries"
import Navbar from "./sections/navbar"
import OurServices from "./sections/services"
import SocialMedia from "./sections/socialMedia"
import { MetaData } from "../../data/meta"
import ContactIcons from "../../components/contactIcons"
const LandingPage = ()=>{
    return (<article className="landing ">
        <title>{MetaData.landing.title}</title>
        <meta name="description" content={MetaData.landing.description} />
        <meta name="keywords" content={MetaData.landing.keywords} />
        <link rel="canonical" href={MetaData.landing.link} />
        <Navbar/>
        <div className="flex flex-col gap-10 xs:gap-14 md:gap-20">
             <Hero/>
             <Clients/>
             <OurServices/>
             <SocialMedia/>
             <Industries/>
             <FAQs/>
             <Footer/>
        </div>
        <ContactIcons/>
        
    </article>)
} 
export default LandingPage