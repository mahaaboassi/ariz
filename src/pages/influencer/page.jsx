import { useEffect } from "react"
import Lines from "../../components/lines"
import HeadingForDynamicPages from "../../components/headingForDynamicPages"
import Intro from "./sections/intro"
import { MetaData } from "../../data/meta"
import ForBusinesses from "./sections/forBusinesses"
import ForInfluencer from "./sections/forInfluencers"
import WhyChooseUs from "./sections/whyChooseUs"
import Contact from "./sections/workWithUs"
import Videos from "./sections/videos"


const Influencer = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0})},[])
    return(<div className="">
            <article>
                <title>{MetaData.influencer.title}</title>
                <meta name="description" content={MetaData.influencer.description} />
                <meta name="keywords" content={MetaData.influencer.keywords} />
                <link rel="canonical" href={MetaData.influencer.link} />
                {/*  Open Graph for Facebook, LinkedIn, etc.  */}
                <meta property="og:title" content={MetaData.influencer.title} />
                <meta property="og:url" content={MetaData.influencer.link} />
                <meta property="og:description" content={MetaData.influencer.description} />
                {/* Twitter  */}
                <meta name="twitter:title" content={MetaData.influencer.title} />
                <meta property="twitter:description" content={MetaData.influencer.description} />


                <Lines isWithGlow={true} children={<div className=" pb-10 mt-32 flex flex-col gap-10 px-4 sm:px-10 ">
                                                        <HeadingForDynamicPages firstTitle={"Home"} secondTitle={"Influencer"} link={"/"} basicTitle={"One Partner. Endless Growth."} />
                                                    </div>} />
                <Intro/>
                <div className="flex flex-col gap-20 c">
                    <ForInfluencer/>
                    <ForBusinesses/>
                    <Videos/>
                    <WhyChooseUs/>
                    <Contact/>
                </div>
            </article>

    </div>)
}
export default Influencer