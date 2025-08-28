import Heading from "../../../components/heading"
import img from "../../../assets/images/shape-big.webp"
import img_2 from "../../../assets/images/for_1.webp"
import { useEffect, useRef, useState } from "react";


const ForBusinesses = ()=>{
    const [visible, setVisible] = useState(false);
    const section_2_Ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
            }
            },
            { threshold: 0.3 }
        );

        if (section_2_Ref.current) {
            observer.observe(section_2_Ref.current);
        }

    return () => observer.disconnect();
    }, []);
    return(<div  className="section-1-influencer relative">
        <div className="container-img">
                <img src={img} alt={"shape-img"} />
            </div>
        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-5 relative z-10">

        <div className="scale">
            <div ref={section_2_Ref}  className={`justify-center lg:justify-start flex  items-center ${visible?"scale-img":""}`}>
                <img className="lg:h-[320px]" src={img_2} alt={"For businesses"} />
            </div>
        </div>
        <div className="flex flex-col gap-3 justify-between">
            <Heading isFromSubscribe={true} nonCenter={true}  title={"Businesses, Grow Smart"} subTitle={"From licensing to lead generation — we’ve got you covered"} />
            <p>
                Launch and scale with confidence. From Dubai business setup and trade licenses to digital marketing and influencer campaigns, we connect you with the right audiences to build awareness, drive leads, and grow sustainably
            </p>
            <div>
                <a href="#contact"><button>Register as a Business</button></a>
            </div>
        </div>
    </div>
    </div>)
}
export default ForBusinesses