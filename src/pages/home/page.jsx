import Lines from "../../components/lines"
import AdsPaid from "./sections/adsPaid"
import Blogs from "./sections/blogs"
import Founder from "./sections/founder"
import Hero from "./sections/hero"
import Services from "./sections/services"
import Showcase from "./sections/showcase"
import Steps from "./sections/steps"

const Home = ()=>{
    
    return(<div>
       <Lines children={<Hero/>}/>
       <Services/>
       <Founder/>
       <Showcase/>
       <Steps/>
       <AdsPaid/>
       <Blogs/>
    </div>)
}

export default Home