import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ServicesPopup = ({closeServices,view,returnValue})=>{
    const data = [{
        name : "Social Media Strategy",
        link : "/services/social-media-strategy"
    },{
        name : "PPC & Paid Advertising",
        link : "/services/PPC-and-paid-advertising"
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
    const [ isView, setIsView ] = useState(false)
    useEffect(()=>{setIsView(view)},[view])
    return(<div className="menu-sevices">
         {isView && <div onClick={closeServices} className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipath="url(#clip0_17_1174)">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_17_1174">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
            </div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 conatiner-btns">
            {data.map((e,idx)=>(<Link key={`Navbar_For_Services_${e.name}_${idx}`} onClick={()=> returnValue(false)} to={e.link} >
            <div  className="btn-sevices p-5  text-center"  >
                {e.name}
            </div>
            </Link>))}
        </div>
        
    </div>)
}
export default ServicesPopup