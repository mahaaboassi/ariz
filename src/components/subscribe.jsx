import Heading from "./heading"
import Lines from "./lines"

const Subscribe = ()=>{
    return(<div className="py-20 px-4 sm:px-10 ">
        <div className="subscribe-container">
            <Lines children={<div className="flex flex-col justify-center  h-full">
                <Heading subTitle={"Got an Idea? Let’s Build It Together"} title={"One Message to Your Success"} />
                <div className="flex justify-center">
                    <button>Book a Meeting</button>
                </div>
            </div>} />
        </div>
    </div>)
}
export default Subscribe