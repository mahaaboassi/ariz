import Heading from "../../../components/heading"
// Images
import show_1 from "../../../assets/images/show_1.png"
import show_2 from "../../../assets/images/ariz-1.png"
import show_3 from "../../../assets/images/show_3.png"
import show_4 from "../../../assets/images/show_2.png"
import show_5 from "../../../assets/images/show_5.png"
import show_6 from "../../../assets/images/ariz-2.png"
import show_7 from "../../../assets/images/foreshore-1.png"
import show_8 from "../../../assets/images/ariz-3.png"
import website_foreshore from "../../../assets/images/website-foreshore.png"
import website_tumbi from "../../../assets/images/website-tumbi.png"

const Showcase = ()=>{
    return(<div className="showcase flex flex-col gap-5 px-4 sm:px-10">
        <Heading subTitle={"Explore Our Creative Showcase"} title={"Brands We’ve Elevated at Ariz Global"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-1" >
            <div className="container-img rounded"><img className="w-full object-cover rounded" src={show_1} alt="show" /></div>
            <div className="container-img"><img className="w-full rounded " id="img-website" src={website_foreshore} alt="show" /></div>
            <div className="container-img"><img className="w-full object-cover rounded" src={show_8} alt="show" /></div>
            <div className="container-img"><img className="w-full rounded" id="img-scroll" src={show_4} alt="show" /></div>
            <div className="container-img"><img className="w-full object-cover rounded" src={show_3} alt="show" /></div>
            <div className="container-img"><img className="w-full object-cover rounded" src={show_7} alt="show" /></div>

            <div className="container-img "><img className="w-full object-cover rounded" src={show_2} alt="show" /></div>
            
            <div className="container-img"><img id="img-website" className="w-full rounded" src={website_tumbi} alt="show" /></div>
            <div className="container-img md:hidden lg:flex"><img className="w-full object-cover rounded" src={show_5} alt="show" /></div>
            <div className="container-img md:hidden lg:flex"><img className="w-full object-cover rounded" src={show_6} alt="show" /></div>
        </div>

    </div>)
}
export default Showcase