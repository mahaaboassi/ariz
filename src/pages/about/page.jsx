import { useEffect } from "react"
import Lines from "../../components/lines"
import Subscribe from "../../components/subscribe"
import Hero from "../home/sections/hero"
import Intro from "./sections/intro"
import Metrics from "./sections/metrics"
import Vision from "./sections/vision"
import { MetaData } from "../../data/meta"

const About = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
            <article>
                <title>{MetaData.about.title}</title>
                <meta name="description" content={MetaData.about.description} />
                <meta name="keywords" content={MetaData.about.keywords} />
                <link rel="canonical" href={MetaData.about.link} />
                <Lines isWithGlow={true} children={<Intro/>} />
                <Vision/>
                <Metrics/>
                <Subscribe/>
            </article>

    </div>)
}
export default About