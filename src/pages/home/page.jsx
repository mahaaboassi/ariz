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
    useEffect (()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<article>

        <title>{MetaData.home.title}</title>
        <meta name="description" content={MetaData.home.description} />
        <meta name="keywords" content={MetaData.home.keywords} />
        <link rel="canonical" href={MetaData.home.link} />


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