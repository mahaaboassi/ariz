import { Link, NavLink } from "react-router-dom"
import { logo } from "../data/data"
import { useState } from "react"
import ServicesPopup from "./servicesPopup"

const Navbar = ()=>{
    const data = [{
        name : "Home",
        link : "/"
    },{
        name : "About",
        link : "/about"
    },{
        name : "Services",
        link : "/services"
    },{
        name : "Blogs",
        link : "/blogs"
    },{
        name : "Contact",
        link : "/contact"
    }]
    const [ isOpenMenu , setIsOpenMenu ] = useState(false)
    const [ openServices, setOpenServices ] = useState(false)
    const closeServices = ()=> setOpenServices(false)
    return(<nav className="px-4 sm:px-10 py-5">
        { openServices && <ServicesPopup returnValue={(res)=>{
            setIsOpenMenu(false)
            setOpenServices(false)
        }} view={openServices} closeServices={closeServices} />}
        <div className="content-nav px-8 sm:py-3">
            <div><Link to={"/"}>{logo}</Link> </div>
            <div>
                <div onClick={()=>setIsOpenMenu(!isOpenMenu)} className={`container-menu-lines px-3 ${isOpenMenu?"close-icon-menu":""}`}>
                    <div className="line-menu-1"></div>
                    <div className="line-menu-2"></div>
                    <div className="line-menu-3"></div>
                </div>
                <ul className={`gap-3 ${isOpenMenu?"open":""}`}>
                    
                    {data.map((e,idx)=>{
                        if(e.name == "Services"){
                            return <li
                                style={{
                                    animationDelay : `${0.1 + idx * 0.1}s`
                                }}
                                key={`Navbar_Ariz_${e.title}_${idx}`}>
                                    <Link onClick={()=>setOpenServices(true)} className={({isActive })=>(isActive ? "active" : "")}>{e.name}</Link>
                                </li>
                        }else{
                            return <li
                                    style={{
                                        animationDelay : `${0.1 + idx * 0.1}s`
                                    }}
                                    key={`Navbar_Ariz_${e.title}_${idx}`}>
                                        <NavLink onClick={()=>setIsOpenMenu(false)} className={({isActive })=>(isActive ? "active" : "")} to={e.link}>{e.name}</NavLink>
                                    </li>
                        }
                    })}
                </ul>
            </div>
        </div>
    </nav>)
}

export default Navbar