import Heading from "./heading"
import logo_1 from "../assets/images/intellectra.png"
import logo_2 from "../assets/images/trn.png"

const Partner = ({isHome})=>{
    return(<div className={`grid grid-cols-1  md:grid-cols-2 gap-5 FAQs-landing  ${isHome?"px-4 sm:px-10 !pt-10":"!pb-10 md:!py-5 container-landing"}`}>
        <div className="flex flex-col gap-5">
            <Heading isFromSubscribe={true} nonCenter={true} title={"Working hand in hand for shared success"} subTitle={"Our Trusted Partners"}/>
            <p>Here we proudly showcase the partners who share our vision and contribute to our shared success.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-center items-center container-logo p-4"><img src={logo_1} alt="TRN" /></div>
            <div className="flex justify-center items-center container-logo p-2"><img src={logo_2} alt="Intellectra" /></div>
        </div>
    </div>)
}
export default Partner