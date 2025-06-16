import { Link } from "react-router-dom"
import Heading from "./heading"
import Lines from "./lines"
import { calendlyLink } from "../data/data"

const Subscribe = ()=>{
    return(<div className="py-20 px-4 sm:px-10 ">
        <div className="subscribe-container">
            <Lines children={<div className="flex flex-col gap-5 justify-center h-full">
                <Heading isFromSubscribe={true} subTitle={"Got an Idea? Let’s Build It Together"} title={"One Step to Your Success Journey"} />
                <div className="flex justify-center">
                    <Link target="_blank" to={calendlyLink} ><button>Book a Meeting</button></Link>
                </div>
            </div>} />
        </div>
    </div>)
}
export default Subscribe