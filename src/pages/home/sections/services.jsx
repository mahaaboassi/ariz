import Lines from "../../../components/lines"
import { content, digital, graphic, paid, search, web, writer } from "../../../data/data"
import shape from "../../../assets/images/shape.png"
const Services = ()=>{

    return(<div className="px-10 services ">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
            <div>
                <h2 className="pb-4">Committed to Transform the Future and Profitability</h2>
                <p>At ARIZ Global, we specialize in building credible, results-driven digital marketing strategies tailored to your brand. Our mission is to enhance your online presence, drive qualified traffic, and increase your ROI through integrated solutions across SEO, paid advertising, social media marketing, and more. Whether you're a startup or an established business, we provide the tools to help you scale.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card relative p-10">
                    
                    <div className="row-line"></div>
                    <div className="row-second-line"></div>
                    <div className="col-line"></div>
                    <div className="col-second-line"></div>
                    <div className="content-card p-10  flex flex-col gap-2">
                        <div className="flex justify-end h-42">{digital}</div>
                        <h3>Social Media Strategy </h3>
                        <p>Enhanced brand visibility and improved audience engagement across top platforms.</p>
                    </div>
                </div>
                <div className="card ">
                    <Lines children={<div className="p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{paid}</div>
                        <h3>PPC & Paid Advertising</h3>
                        <p>Targeted traffic generation and higher return on ad spend through strategic campaigns.</p>
                    </div>} />
                </div>
            </div>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card relative flex flex-col gap-2">
                    <Lines children={<div className="p-5 lg:p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{graphic}</div>
                        <h3>Branding & Graphic Design</h3>
                        <p>Impactful brand identity and professional visual assets that boost recognition.</p>
                    </div>} />
                </div>
                <div className="card relative p-10 flex flex-col gap-2">
                    <div style={{bottom:"0", top:"unset", transform:"rotate(180deg)"}} className="container-image "><img src={shape} alt="shape" /></div>
                    <div className="content-card p-5 lg:p-10  flex flex-col gap-2">
                        <div className="flex justify-center h-42">{writer}</div>
                        <h3>Content Marketing </h3>
                        <p>SEO-driven content that improves search engine rankings and attracts qualified leads.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card ">
                    <Lines children={<div className="p-5 lg:p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{web}</div>
                        <h3>Web Design & Development </h3>
                        <p>Responsive, SEO-optimized websites designed for improved performance and user experience.</p>
                    </div>} />
                </div>
                <div className="card relative  ">
                        <div className="container-image"><img src={shape} alt="shape" /></div>
                        <div className="content-card p-5 lg:p-10  flex flex-col gap-2">
                            <div className="flex justify-end h-42">{search}</div>
                            <h3>Search Engine Optimization </h3>
                            <p>Improved search rankings through on-page optimization and advanced keywords.</p>
                        </div>
                    
                </div>
            </div>
       </div>
        
    </div>)
}

export default Services