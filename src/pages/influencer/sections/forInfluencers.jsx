import Heading from "../../../components/heading"
import img from "../../../assets/images/shape-big.webp"
import img_2 from "../../../assets/images/for_2.webp"
import { useEffect, useRef, useState } from "react";


const ForInfluencer = ()=>{
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
            }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

    return () => observer.disconnect();
    }, []);
    return(<div  className="section-1-influencer  relative">
        <div className="container-img">
                <img src={img} alt={"shape-img"} />
            </div>
        <div  className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-5 relative z-10">
        <div className="flex flex-col gap-3 justify-between">
            <Heading isFromSubscribe={true} nonCenter={true}  title={"Influencers, Stay Compliant"} subTitle={"Build your influence with confidence in Dubai"} />
            <p>
                Protect your reputation and grow your reach through UAE-compliant influencer collaborations. Work with trusted brands, access new campaigns, and unlock safe opportunities in the Dubai market.CTA:  Register as an Influencer
            </p>
            <div>
                <a href="#contact"><button>Register as an Influencer</button></a>
            </div>
        </div>
        <div className="scale">
            <div ref={sectionRef}  className={`justify-center lg:justify-end flex  items-center ${visible?"scale-img":""}`}>
                <img className="lg:h-[320px]" src={img_2} alt={"For businesses"} />
            </div>
        </div>
    </div>
    </div>)
}
export default ForInfluencer