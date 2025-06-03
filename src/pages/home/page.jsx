import Lines from "../../components/lines"
import Founder from "./sections/founder"
import Hero from "./sections/hero"
import Services from "./sections/services"

const Home = ()=>{
    
    return(<div>
       <Lines children={<Hero/>}/>
       <Services/>
       <Founder/>
    </div>)
}

export default Home