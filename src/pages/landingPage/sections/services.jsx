import Heading from "../../../components/heading"
import { content, digital, graphic, paid, search, web, writer } from "../../../data/data"

const OurServices = ()=>{
    const data = [{
        title : "Social Media Management",
        description : "Enhanced brand visibility and improved audience engagement across top platforms.",
        icon : digital
    },{
        title : "PC & Paid Advertising",
        description : "Targeted traffic generation and higher return on ad spend through strategic campaigns.",
        icon : paid
    },{
        title : "Branding & Graphic Design",
        description : "Impactful brand identity and professional visual assets that boost recognition.",
        icon : graphic
    },{
        title : "Content Marketing ",
        description : "SEO-driven content that improves search engine rankings and attracts qualified leads.",
        icon : writer
    },{
        title : "Web Design & Development ",
        description : "Responsive, SEO-optimized websites for improved performance and user experience.",
        icon : web
    },{
        title : "Search Engine Optimization ",
        description : "Improved search rankings through on-page optimization and advanced keywords.",
        icon : search
    }]
    return(<div className="container-landing service-landing">
        <Heading title={"What We Bring to Your Brand"} subTitle={"Smart Solutions. Real Results."} />
        <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-7 ">
            {
                data.map((e,idx)=>(<div className="card-services flex flex-col gap-2 xs:gap-4 p-2 xs:p-4" key={`Services_LandingPage_${e.title}_${idx}`}>
                    <div className="flex">{e.icon}</div>
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                    <h4>{e.title}</h4>
                    <p>{e.description}</p>
                    <div>
                        {/* <button className="w-full">Get a Quote</button> */}
                    </div>
                </div>))
            }

        </div>
    </div>)
}
export default OurServices