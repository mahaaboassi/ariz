import { Link } from "react-router-dom"
import news from "../../../assets/images/gulf-news.webp"
import stories from "../../../assets/images/uae-stories.webp"
import { gulfNewsLink, uaeStoriesLink } from "../../../data/data"
const Articales = ()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2  gap-5  container-landing   founder">
            <div>
                <h2>Trusted by the Media: Get to Know The Visionary Behind Ariz Global</h2>
                <p>Featured by Trusted News Sources</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Link target="_blank" to={gulfNewsLink}>
                    <div className="container-icons h-full p-5 cursor-pointer">
                        <img className="h-10" src={news} alt="Gulf-News" />
                    </div>
                </Link>
                <Link target="_blank" to={uaeStoriesLink}>
                    <div style={{border:"2px solid rgba(149, 149, 149, 0.15)", background:"unset"}}  className="container-icons p-5 cursor-pointer">
                        <img className="h-15" src={stories} alt="UAE-Stories" />
                    </div>
                </Link>
                
            </div>
        </div>
}
export default Articales