import { useEffect, useRef, useState } from "react";
import MobileInput from "../../../components/mobilePhone"

const Hero = ()=>{
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
            }else{
                setVisible(false)
            }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

    return () => observer.disconnect();
    }, []);
    return(<div id="callUs" className="hero-landing grid grid-cols-2 pt-50 px-20">
        <div className="flex flex-col gap-5">
            <h1>Grow Your Brand with Smart Social Media Tools</h1>
            <p>In a market where millions compete to shine online, our social media tools help UAE brands grow smarter and faster.</p>
            <div>
                <div ref={sectionRef} className="container-analytics">
                    <div className="behind-card"></div>
                    <div className="analytics-card  flex flex-col justify-center items-center gap-5">
                        <h2>See Your Brand Grow</h2>
                        <div className="flex gap-10 items-center">
                            <div className="container-circles">
                                    <div className={`yellow-circle ${visible?"circle-animate-1":""}`}></div>
                                    <div className={`white-circle ${visible?"circle-animate-2":""}`}></div>
                                    <div className="center-circle"></div>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-2">
                                    <li className="with">With Digital Presence</li>
                                    <li className="without">Without Digital Presence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
            <form className="flex flex-col gap-5 p-7">
                <div className="flex gap-5 items-center">
                    <div className="line-form"></div>
                    <h2>GET A QUOTE</h2>
                    <div className="line-form"></div>
                </div>
                
                <div className="flex flex-col  gap-3">
                    <div>
                        <input className="w-full" placeholder="Name" /> 
                    </div>
                    <div>
                        <input className="w-full" placeholder="Email" /> 
                    </div>
                    <div>
                        <MobileInput  returnedCountry={()=>{}}   /> 
                    </div>
                    <div>
                        <input className="w-full" placeholder="Company Name" /> 
                    </div>
                    <div className="selected-div flex flex-col gap-2">
                        <span>Interested Monthly Retainer</span>
                        <div>
                            <div className="flex gap-1 items-center">
                                <input type="checkbox" />
                                <div>5,000 AED  - 7,990 AED</div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input type="checkbox" />
                                <div>7,900 AED - 12,000 AED</div>
                            </div>
                            <div className="flex gap-1 items-center"> 
                                <input type="checkbox" />
                                <div>12,000 - 15,000 AED</div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <textarea className="w-full" placeholder="Message" />
                    </div>
                    <div>
                        <button className="w-full">Get a Quote</button>
                    </div>
                </div>

            </form>
        </div>
    </div>)
}
export default Hero