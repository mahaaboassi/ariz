import { useEffect, useRef, useState } from "react"
import { hostStorage } from "../../../data/meta"


const Videos = ()=>{
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

    return(<div className="container-landing">
        <div ref={sectionRef} className="grid grid-cols-2 relative">
            <div className="cover-video ">
                <div  className={`w-3/4 text-center ${visible ? "popup-text" : ""}`}>
                    Turn Your Influence Into a Certified Career
                    <div className="line-text"></div>
                </div>
            </div>
            <div>
                <video
                src={`${hostStorage}/Influencer_1.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                />
            </div>
            <div>
                <video
                src={`${hostStorage}/Influencer_2.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                />
            </div>
            <div>
                <video
                src={`${hostStorage}/Influencer_3.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                />
            </div>
            <div>
                <video
                src={`${hostStorage}/Influencer_4.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                />
            </div>
        </div>

    </div>)
}

export default Videos