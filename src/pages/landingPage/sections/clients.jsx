import intellectra from "../../../assets/images/intellectra.png"
import tumbi from "../../../assets/images/tumbi.png"
import foreshore from "../../../assets/images/foreshore.png"
import onlinist from "../../../assets/images/onlinist.png"
import kodeks from "../../../assets/images/kodeks.png"
import adcb from "../../../assets/images/adcb.png"
import { useEffect, useRef, useState } from "react"

const Clients = ()=>{
    const companies = [{
        name : "Tumbi",
        icon : tumbi
    },{
        name : "Foreshore",
        icon : foreshore
    },{
        name : "Kodeks",
        icon : kodeks
    },{
        name : "ADCB",
        icon : adcb
    },{
        name : "Intellectra",
        icon : intellectra
    },{
        name : "Onlinist",
        icon : onlinist
    }]
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
    return(<div className="clients container-landing  ">
        <div className="flex content-clients gap-10 xs:gap-20   lg:pt-20">
            <div className="title">
                <h2>OUR DELIGHTED CLIENTS</h2>
            </div>
            <div className="flex w-full">
                <div ref={sectionRef} className="items-center grid grid-cols-2  md:grid-cols-3  lg:grid-cols-6 gap-10 lg:gap-5 flex justify-between  w-full">
                    {companies.map((e,idx)=>{
                        return <div className="flex justify-center" key={`Companies_${e.name}_${idx}`}>
                        <img className={visible?`animation-img`:""} src={e.icon} alt={e.name} />
                    </div>
                    })}
                </div>
            </div>

        </div>

    </div>)
}
export default Clients