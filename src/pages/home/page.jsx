import { useEffect } from "react"
import Lines from "../../components/lines"
import AdsPaid from "./sections/adsPaid"
import Blogs from "./sections/blogs"
import Founder from "./sections/founder"
import Hero from "./sections/hero"
import Services from "./sections/services"
import Showcase from "./sections/showcase"
import Steps from "./sections/steps"
import { MetaData } from "../../data/meta"
import Partner from "../../components/partner"

const Home = ()=>{
    useEffect (()=>{window.scrollTo({ top: 0})},[])
    return(<article>

        <title>{MetaData.home.title}</title>
        <meta name="description" content={MetaData.home.description} />
        <meta name="keywords" content={MetaData.home.keywords} />
        <link rel="canonical" href={MetaData.home.link} />
        {/*  Open Graph for Facebook, LinkedIn, etc.  */}
        <meta property="og:title" content={MetaData.home.title} />
        <meta property="og:url" content={MetaData.home.link} />
        <meta property="og:description" content={MetaData.home.description} />
        {/* Twitter  */}
        <meta name="twitter:title" content={MetaData.home.title} />
        <meta property="twitter:description" content={MetaData.home.description} />



        <Lines isWithGlow={true} children={<Hero/>}/>
       <div className="flex flex-col gap-20">
            <Services/>
            <Founder/>
            <Showcase/>
            <Steps/>
            <AdsPaid/>
            <Partner isHome={true}/>
            <Blogs/>
       </div>
    </article>)
}

export default Home