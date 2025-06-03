import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

const Layout = ()=>{
    return(<div>
        <Navbar/>
        <Outlet/>
        <h2>Footer</h2>
    </div>)
}
export default Layout