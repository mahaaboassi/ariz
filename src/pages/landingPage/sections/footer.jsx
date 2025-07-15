import { Link } from "react-router-dom"
import img from "../../../assets/images/logo-footer.webp"
import mail from "../../../assets/images/mailIcone.webp"
import Whatsapp from "../../../assets/images/phone.webp"
import phone from "../../../assets/images/call.webp"
import location from "../../../assets/images/location.webp"
import landline from "../../../assets/images/landline.webp"

const Footer = ()=>{

    const services = [{
        name : "Social Media Management",
        link : "/services/social-media-management"
    },{
        name : "PPC & Paid Advertising",
        link : "/services/ppc-and-paid-advertising"
    },{
        name : "Branding & Graphic Design",
        link : "/services/branding-and-graphic-design"
    },{
        name : "Content Marketing",
        link : "/services/content-marketing"
    },{
        name : "Web Design & Development",
        link : "/services/web-design-and-development"
    },{
        name : "Search Engine Optimization",
        link : "/services/search-engine-optimization"
    }]
    const contact = [{
        name  : "Email",
        value : "info@arizglobal.com",
        link : 'mailto:info@arizglobal.com',
        icon : mail
    
    },{
        name  : "Phone",
        value : "+971 58 918 5328",
        link : 'tel:+971589185328',
        icon : phone
    },{
        name  : "Landline",
        value : "+971 4 323 5609",
        link : 'tel:+97143235609',
        icon :  landline
    },{
        name  : "Location",
        value : "Dubai Investment Park 1, United Arab Emirates",
        link : '#callUs',
        icon : location
    },]

    return(<footer className="px-4 sm:px-10 flex py-10 gap-6 lg:gap-5 xl:gap-10" >
            <div className="first-col-in-footer flex flex-col gap-5">
                <div>
                    <img src={img} className="w-2xs" alt="Ariz Global Logo" />
                </div>
                <p>
                    Ariz Global is a results-driven digital marketing agency specializing in creative branding, content strategy, and growth marketing. With deep expertise in public relations, paid media, and social storytelling, we help businesses—from startups to global enterprises—elevate their presence, drive traffic, and generate leads.
                </p>
                <p> © 2025 Ariz Global. All rights reserved.</p>
            </div>
            <div className="second-col-in-footer grid grid-cols-1 g sm:grid-cols-2 gap-2 lg:gap-5  xl:gap-10 ">
                <div className="flex flex-col gap-2 sm:gap-3 pages">
                    <h2>Services</h2>
                    {services.map((e,idx)=>(<a  href={"#callUs"} key={`Services_Footer_Landing_${e.name}_${idx}`} >
                        <div>{e.name}</div>
                    </a>))}
                </div>
                <div className="flex flex-col justify-between gap-2 ">
                    <div className="flex flex-col gap-2 sm:gap-3 pages">
                        <h2>Contact</h2>
                        {contact.map((e,idx)=>(<a  key={`Support_Footer_Landing_${e.name}_${idx}`}  href={e.link}>
                            <div className="flex items-center  gap-2">
                                <div><img  className="w-6 " src={e.icon} alt={e.name} /></div>
                                <div style={{textTransform:"none"}}>{e.value}</div>
                            </div>
                            </a>))}
                    </div>

                </div>
            </div>
    </footer>)
}
export default Footer