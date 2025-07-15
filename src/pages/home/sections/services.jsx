import Lines from "../../../components/lines"
import { content, digital, graphic, paid, search, web, writer } from "../../../data/data"
import shape from "../../../assets/images/shape.webp"
import { Link, useNavigate } from "react-router-dom"
const Services = ()=>{
    const navigate = useNavigate()
    return(<div className="px-4 sm:px-10 services ">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
            <div className="lg:w-3/4">
                <h2 className="pb-4">Tailored Marketing Solutions That Deliver Real Results</h2>
                <p>At ARIZ Global, we specialize in building credible, results-driven digital marketing strategies tailored to your brand. Our mission is to enhance your online presence, drive qualified traffic, and increase your ROI through integrated solutions across SEO, paid advertising, social media marketing, and more. Whether you're a startup or an established business, we provide the tools to help you scale.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div onClick={()=>navigate("/services/social-media-management")}  className="card relative ">
                    
                    <div className="row-line"></div>
                    <div className="row-second-line"></div>
                    <div className="col-line"></div>
                    <div className="col-second-line"></div>
                    <div className="content-card p-4 xl:p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{digital}</div>
                        <h3>Social Media Management</h3>
                        <p>Enhanced brand visibility and improved audience engagement across top platforms.</p>
                        <Link  to={"/services/social-media-management"}>
                            <div className="flex gap-2 items-center cta-card">
                                <div>Explore</div>
                                <div className="continer-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 29 46" fill="none">
                                        <path d="M0 40.595L17.9244 23L0 5.405L5.51822 0L29 23L5.51822 46L0 40.595Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div onClick={()=>navigate("/services/ppc-and-paid-advertising")}  className="card ">
                    <Lines children={<div className="p-4 xl:p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{paid}</div>
                        <h3>PPC & Paid Advertising</h3>
                        <p>Targeted traffic generation and higher return on ad spend through strategic campaigns.</p>
                        <Link  to={"/services/ppc-and-paid-advertising"}>
                            <div className="flex gap-2 items-center cta-card">
                                <div>Explore</div>
                                <div className="continer-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 29 46" fill="none">
                                        <path d="M0 40.595L17.9244 23L0 5.405L5.51822 0L29 23L5.51822 46L0 40.595Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>} />
                </div>
            </div>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div onClick={()=>navigate("/services/branding-and-graphic-design")}  className="card relative flex flex-col gap-2">
                    <Lines children={<div className="p-4 xl:p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{graphic}</div>
                        <h3>Branding & Graphic Design</h3>
                        <p>Impactful brand identity and professional visual assets that boost recognition.</p>
                        <Link  to={"/services/branding-and-graphic-design"}>
                            <div className="flex gap-2 items-center cta-card">
                                <div>Explore</div>
                                <div className="continer-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 29 46" fill="none">
                                        <path d="M0 40.595L17.9244 23L0 5.405L5.51822 0L29 23L5.51822 46L0 40.595Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>} />
                </div>
                <div onClick={()=>navigate("/services/content-marketing")} className="card relative  flex flex-col gap-2">
                    <div style={{bottom:"0", top:"unset", transform:"rotate(180deg)"}} className="container-image "><img src={shape} alt="shape" /></div>
                    <div className="content-card p-4 xl:p-10  flex flex-col gap-2">
                        <div className="flex justify-center h-42">{writer}</div>
                        <h3>Content Marketing </h3>
                        <p>SEO-driven content that improves search engine rankings and attracts qualified leads.</p>
                        <Link  to={"/services/content-marketing"}>
                            <div className="flex gap-2 items-center cta-card">
                                <div>Explore</div>
                                <div className="continer-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 29 46" fill="none">
                                        <path d="M0 40.595L17.9244 23L0 5.405L5.51822 0L29 23L5.51822 46L0 40.595Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div onClick={()=>navigate("/services/web-design-and-development")} className="card ">
                    <Lines children={<div className="p-4 xl:p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{web}</div>
                        <h3>Web Design & Development </h3>
                        {/* <p>Responsive, SEO-optimized websites designed for improved performance and user experience.</p> */}
                        <p>Responsive, SEO-optimized websites for improved performance and user experience.</p>
                        <Link  to={"/services/web-design-and-development"}>
                            <div className="flex gap-2 items-center cta-card">
                                <div>Explore</div>
                                <div className="continer-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 29 46" fill="none">
                                        <path d="M0 40.595L17.9244 23L0 5.405L5.51822 0L29 23L5.51822 46L0 40.595Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>} />
                </div>
                <div onClick={()=>navigate("/services/search-engine-optimization")} className="card relative  ">
                        <div className="container-image"><img src={shape} alt="shape" /></div>
                        <div className="content-card p-4 xl:p-10  flex flex-col gap-2">
                            <div className="flex justify-center h-42">{search}</div>
                            <h3>Search Engine Optimization </h3>
                            <p>Improved search rankings through on-page optimization and advanced keywords.</p>
                            <Link  to={"/services/search-engine-optimization"}>
                                <div className="flex gap-2 items-center cta-card">
                                    <div>Explore</div>
                                    <div className="continer-arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 29 46" fill="none">
                                            <path d="M0 40.595L17.9244 23L0 5.405L5.51822 0L29 23L5.51822 46L0 40.595Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    
                </div>
            </div>
       </div>
        
    </div>)
}

export default Services