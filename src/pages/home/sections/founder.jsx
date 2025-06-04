import img from "../../../assets/images/Majid.avif"
import shape from "../../../assets/images/shape-2.png"
import news from "../../../assets/images/gulf-news.png"
import stories from "../../../assets/images/uae-stories.png"
import Heading from "../../../components/heading"

const Founder = ()=>{
    return(<div className="px-10 py-20 flex flex-col gap-5 founder">
        <Heading subTitle={"Driven Leadership, Proven Results"} title={"Meet the Visionary Behind Ariz Global"} />
        <div className="grid grid-cols-2 gap-10">
            <div className="founder-image">
                <img alt="Majid Ahmad" src={img} />
            </div>
            <div className="content-founder ">
                <div className="img-content"><img src={shape} alt="shape" /></div>
                <div className="content p-10 flex flex-col gap-5">
                    <h4>Majid Ahmad – Founder & Marketing Strategist</h4>
                    <p>Leading with Passion, Delivering with Purpose</p>
                    <p>With over a decade of experience in the digital marketing space, Majid Ahmad is the driving force behind Ariz Global's success in Dubai and beyond. Known for his visionary mindset and hands-on approach, Majid specializes in crafting result-oriented marketing strategies that empower businesses to thrive in the digital age. Clients value his honesty, strategic insights, and unwavering commitment to excellence</p>
                    <button className="!w-full">Book A Meeting</button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
            <div>
                <h4>See What Leading Publications Are Saying About Majid Ahmad</h4>
                <p>Featured By Trusted News Sources</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="container-icons p-5 cursor-pointer">
                    <img className="h-10" src={news} alt="Gulf-News" />
                </div>
                <div className="container-icons p-5 cursor-pointer">
                    <img className="h-15" src={stories} alt="UAE-Stories" />
                </div>
            </div>
        </div>
    </div>)
}
export default Founder