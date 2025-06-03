import { NavLink } from "react-router-dom"
import { logo } from "../data/data"

const Navbar = ()=>{
    const data = [{
        name : "Home",
        link : "/"
    },{
        name : "About",
        link : "/"
    },{
        name : "Services",
        link : "/"
    },{
        name : "News",
        link : "/"
    },{
        name : "Contact",
        link : "/"
    }]
    return(<nav className="px-10  py-5">
        <div className="content-nav px-8 py-3">
            <div>{logo}</div>
            <div>
                <ul className="gap-3">
                    {data.map((e,idx)=>(<li key={`Navbar_Ariz_${e.title}_${idx}`}>
                        <NavLink className={({isActive })=>(isActive ? "active" : "")} to={e.link}>{e.name}</NavLink>
                    </li>))}
                </ul>
            </div>
        </div>
    </nav>)
}

export default Navbar