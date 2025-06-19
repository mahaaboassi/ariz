import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ContactIcons from "../components/contactIcons"
import Popup from "../components/popup"

const Layout = ()=>{
    return(<div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ContactIcons/>
        <Popup/>
    </div>)
}
export default Layout