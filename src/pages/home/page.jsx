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
       <Services/>
       <Founder/>
       <Showcase/>
       <Steps/>
       <AdsPaid/>
       <Blogs/>
    </article>)
}

export default Home