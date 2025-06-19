import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ContactIcons from "../components/contactIcons"

const Layout = ()=>{
    return(<div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ContactIcons/>
    </div>)
}
export default Layout