import { useEffect } from "react"
import Lines from "../../components/lines"
import Subscribe from "../../components/subscribe"
import Hero from "../home/sections/hero"
import Intro from "./sections/intro"
import Metrics from "./sections/metrics"
import Vision from "./sections/vision"

const About = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <Lines isWithGlow={true} children={<Intro/>} />
        <Vision/>
        <Metrics/>
        <Subscribe/>
    </div>)
}
export default About