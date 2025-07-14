
import landline from "../../../assets/images/landline.webp"
import mail from "../../../assets/images/mailIcone.webp"
import phone from "../../../assets/images/call.webp"
import location from "../../../assets/images/location.webp"
import Whatsapp from "../../../assets/images/phone.webp"
import { Link } from "react-router-dom"

const Footer = ()=>{
    const services = ["Social Media Management","PC & Paid Advertising","Branding & Graphic Design",
                      "Content Marketing","Web Design & Development","Search Engine Optimization"]
    const contact = [{
        name  : "Email",
        value : "info@arizglobal.com",
        link : 'mailto:info@arizglobal.com',
        icon : mail
    
    },{
        name  : "Whatsapp",
        value : "+971 58 918 5328",
        link : 'https://wa.me/971589185328',
        icon : Whatsapp
    },{
        name  : "Phone",
        value : "+971 58 918 5328",
        link : 'tel:+971589185328',
        icon : phone
    },{
        name  : "Location",
        value : "Dubai Investment Park, United Arab Emirates",
        link : 'https://maps.app.goo.gl/dxPpWYSHKmVpW3k6A',
        icon : location
    },]
    return(<div className="final-section">
        <div className="grid grid-cols-3 container-landing ">
            <div>
                hello
            </div>
            <div>
                hello 2
            </div>
            <div>
                <h2>Contact Us</h2>
                <div className="flex flex-col">
                    {contact.map((e,idx)=>(<Link  to={e.link}>
                    <div className="flex  gap-2">
                        <div><img className="w-5 h-5" src={e.icon} alt={e.name} /></div>
                        <div>{e.value}</div>
                    </div>
                    </Link>))}
                </div>
            </div>
        </div>
        {/* <div className="flex flex-col gap-4 container-landing !py-10">
            <h2>What Are You Looking For?</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-5">
                {
                    services.map((e,idx)=>(
                        <a key={`Keywords-${e}_${idx}`} href={"#callUs"}>
                            <div className="card-final text-center p-4 flex justify-center items-center">
                                {e}
                            </div>
                        </a>
                        
                    ))
                }

            </div>
        </div> */}
        <footer className="flex flex-col text-center justify-center items-center gap-2 container-landing !py-5">
            <div>Ariz Global @ 2025. All rights reserved.</div>
            <div className="flex gap-1 items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 31 31" fill="none">
                        <g clipPath="url(#clip0_836_1962)">
                        <path d="M15.5013 15.5002C14.0805 15.5002 12.918 14.3377 12.918 12.9168C12.918 11.496 14.0805 10.3335 15.5013 10.3335C16.9221 10.3335 18.0846 11.496 18.0846 12.9168C18.0846 14.3377 16.9221 15.5002 15.5013 15.5002ZM23.2513 13.1752C23.2513 8.48641 19.8284 5.16683 15.5013 5.16683C11.1742 5.16683 7.7513 8.48641 7.7513 13.1752C7.7513 16.1977 10.2701 20.2018 15.5013 24.981C20.7326 20.2018 23.2513 16.1977 23.2513 13.1752ZM15.5013 2.5835C20.9263 2.5835 25.8346 6.74266 25.8346 13.1752C25.8346 17.4635 22.3859 22.5397 15.5013 28.4168C8.61672 22.5397 5.16797 17.4635 5.16797 13.1752C5.16797 6.74266 10.0763 2.5835 15.5013 2.5835Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_836_1962">
                        <rect width="31" height="31" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                </div>
                <div> Dubai Investment Park 1, United Arab Emirates</div>
            </div>
        </footer>
    </div>)
}

export default Footer