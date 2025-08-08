import img from "../../../assets/images/gulf_style.png"
import img_2 from "../../../assets/images/uae_style.png"
import shape from "../../../assets/images/shape-2.webp"
import news from "../../../assets/images/gulf-news.webp"
import stories from "../../../assets/images/uae-stories.webp"
import Heading from "../../../components/heading"
import { Link } from "react-router-dom"
import { calendlyLink, gulfNewsLink, uaeStoriesLink } from "../../../data/data"

const Founder = ()=>{
    return(<div className="px-4 sm:px-10 py-20 flex flex-col gap-5 founder">
        <Heading subTitle={"Driven Leadership, Proven Results"} title={"Featured by Trusted News Sources"} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative founder-container">
                <Link target="_blank" to={gulfNewsLink}>
                    <div className="founder-image ">
                        <img alt="Gulf News" src={img} />
                    </div>
                    <div className="button">
                        <div style={{border:"1px solid #0b081d"}} className="container-icons p-5 cursor-pointer">
                                <img className="h-10" src={news} alt="Gulf-News" />
                            </div>
                    </div>
                </Link>
            </div>
            
            <div className="relative founder-container">
                <Link target="_blank" to={uaeStoriesLink}>
                    <div className="founder-image">
                        <img alt="UAE Stories" src={img_2} />
                    </div>
                    <div className="button">
                        <div style={{border:"2px solid rgba(149, 149, 149, 0.15)", background:"#0b081d"}}  className="container-icons p-5 cursor-pointer">
                                <img className="h-15" src={stories} alt="UAE-Stories" />
                            </div>
                    </div>
                </Link>
            </div>
        </div>

    </div>)
}
export default Founder