import Clients from "./sections/clients"
import FAQs from "./sections/faqs"
import Footer from "./sections/footer"
import Hero from "./sections/hero"
import Industries from "./sections/industries"
import Navbar from "./sections/navbar"
import OurServices from "./sections/services"
import SocialMedia from "./sections/socialMedia"

const LandingPage = ()=>{
    return (<div className="landing ">
        <Navbar/>
        <div className="flex flex-col gap-20">
             <Hero/>
             <Clients/>
             <OurServices/>
             <SocialMedia/>
             <Industries/>
             <FAQs/>
             <Footer/>
        </div>
        
    </div>)
} 
export default LandingPage