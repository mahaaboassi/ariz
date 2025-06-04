import Lines from "../../../components/lines"
import { content, digital, graphic, paid, search, web, writer } from "../../../data/data"
import shape from "../../../assets/images/shape.png"
const Services = ()=>{

    return(<div className="px-10 services ">
       <div className="grid grid-cols-2 gap-4 py-5">
            <div>
                <h2 className="pb-4">Committed to Transform the Future and Profitability</h2>
                <p>At ARIZ, we understand the importance of brand credibility. We explore effective ways to build on marketing strategies and create a solid online reputation for your brand.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="card relative p-10">
                    
                    <div className="row-line"></div>
                    <div className="row-second-line"></div>
                    <div className="col-line"></div>
                    <div className="col-second-line"></div>
                    <div className="content-card p-10  flex flex-col gap-2">
                        <div className="flex justify-end h-42">{digital}</div>
                        <h3>Social Media Strategy </h3>
                        <p>We strategically optimize your brand and audience across all the platforms.</p>
                    </div>
                </div>
                <div className="card ">
                    <Lines children={<div className="p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{paid}</div>
                        <h3>PPC & Paid Advertising</h3>
                        <p>We strategically optimize your brand and audience across all the platforms.</p>
                    </div>} />
                </div>
            </div>
       </div>
       <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="card relative flex flex-col gap-2">
                    <Lines children={<div className="p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{graphic}</div>
                        <h3>Branding & Graphic Design</h3>
                        <p>We strategically optimize your brand and audience across all the platforms.</p>
                    </div>} />
                </div>
                <div className="card relative p-10 flex flex-col gap-2">
                    <div style={{bottom:"0", top:"unset", transform:"rotate(180deg)"}} className="container-image "><img src={shape} alt="shape" /></div>
                    <div className="content-card p-10  flex flex-col gap-2">
                        <div className="flex justify-center h-42">{writer}</div>
                        <h3>Content Marketing </h3>
                        <p>We strategically optimize your brand and audience across all the platforms.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="card ">
                    <Lines children={<div className="p-10 flex flex-col gap-2">
                        <div className="flex justify-center h-42">{web}</div>
                        <h3>Web Design & Development </h3>
                        <p>We strategically optimize your brand and audience across all the platforms.</p>
                    </div>} />
                </div>
                <div className="card relative  ">
                        <div className="container-image"><img src={shape} alt="shape" /></div>
                        <div className="content-card p-10  flex flex-col gap-2">
                            <div className="flex justify-end h-42">{search}</div>
                            <h3>Search Engine Optimization </h3>
                            <p>We strategically optimize your brand and audience across all the platforms.</p>
                        </div>
                    
                </div>
            </div>
       </div>
        
    </div>)
}

export default Services