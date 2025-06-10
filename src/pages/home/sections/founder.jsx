import img from "../../../assets/images/majid.avif"
import shape from "../../../assets/images/shape-2.png"
import news from "../../../assets/images/gulf-news.png"
import stories from "../../../assets/images/uae-stories.png"
import Heading from "../../../components/heading"
import { Link } from "react-router-dom"
import { gulfNewsLink, uaeStoriesLink } from "../../../data/data"

const Founder = ()=>{
    return(<div className="px-4 sm:px-10 py-20 flex flex-col gap-5 founder">
        <Heading subTitle={"Driven Leadership, Proven Results"} title={"Meet the Visionary Behind Ariz Global"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div style={{zIndex:"-2"}} className="relative">
                <div className="founder-image">
                    <img alt="Majid Ahmad" src={img} />
                </div>
            </div>
            
            <div className="content-founder ">
                <div className="img-content"><img src={shape} alt="shape" /></div>
                <div className="content p-5 lg:p-10 flex flex-col gap-5">
                    <h4>Majid Ahmad – Founder & Marketing Strategist</h4>
                    <p>Leading with Passion, Delivering with Purpose</p>
                    <p>With 10+ years of hands-on experience in digital marketing, Majid Ahmad is the strategic mind behind Ariz Global’s impact across Dubai and the GCC. Recognized for his forward-thinking leadership and data-driven approach, Majid empowers brands through result-oriented marketing strategies. His reputation for integrity, insight, and innovation has made him a trusted advisor to both startups and established businesses navigating the digital landscape.</p>
                    <button className="!w-full">Book A Meeting</button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
            <div>
                <h4>Trusted by the Media: Read What Publications Say About Majid Ahmad</h4>
                <p>Featured By Trusted News Sources</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Link target="_blank" to={gulfNewsLink}>
                    <div className="container-icons h-full p-5 cursor-pointer">
                        <img className="h-10" src={news} alt="Gulf-News" />
                    </div>
                </Link>
                <Link target="_blank" to={uaeStoriesLink}>
                    <div className="container-icons p-5 cursor-pointer">
                        <img className="h-15" src={stories} alt="UAE-Stories" />
                    </div>
                </Link>
                
            </div>
        </div>
    </div>)
}
export default Founder