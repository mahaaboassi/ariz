import { useEffect } from "react"
import Lines from "../../components/lines"
import Subscribe from "../../components/subscribe"
import Intro from "./sections/intro"
import Metrics from "./sections/metrics"
import Vision from "./sections/vision"
import { MetaData } from "../../data/meta"

const About = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0})},[])
    return(<div>
            <article>
                <title>{MetaData.about.title}</title>
                <meta name="description" content={MetaData.about.description} />
                <meta name="keywords" content={MetaData.about.keywords} />
                <link rel="canonical" href={MetaData.about.link} />
                {/*  Open Graph for Facebook, LinkedIn, etc.  */}
                <meta property="og:title" content={MetaData.about.title} />
                <meta property="og:url" content={MetaData.about.link} />
                <meta property="og:description" content={MetaData.about.description} />
                {/* Twitter  */}
                <meta name="twitter:title" content={MetaData.about.title} />
                <meta property="twitter:description" content={MetaData.about.description} />


                <Lines isWithGlow={true} children={<Intro/>} />
                <Vision/>
                <Metrics/>
                <Subscribe/>
            </article>

    </div>)
}
export default About