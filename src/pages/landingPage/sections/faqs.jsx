import Heading from "../../../components/heading"
import img from "../../../assets/images/shape-big.webp"
import { useState } from "react";
import { FAGs } from "../../../data/data";
import Accordion from "../../../components/accordion";

const FAQs = ()=>{
    const [openIndex, setOpenIndex] = useState(null);
    
    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return(<div className="FAQs-landing ">
        <div className="container-img ">
            <img src={img} alt={"shape-img"} />
        </div>
        <div className="grid grid-cols-1 relative md:grid-cols-2 gap-5 content-faqs container-landing">
            <div className="relative">
                <div className="sticky top-20 flex flex-col gap-5">
                    <Heading title={"Got questions? We’ve got answers."} subTitle={"Most Popular Questions"} />
                    <p>Explore answers to frequently asked questions to help you better understand our services and how we work.</p>
                    <div>
                        <a href="#callUs"><button>Get a Quote</button></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {FAGs.map((e,idx)=>(<Accordion 
                            key={`FAQs_Landing_${e.question}_${idx}`}
                            question={e.question} answer={e.answer}  
                            isOpen={openIndex === idx}
                            onClick={() => handleToggle(idx)}
                            />))}
                
            </div>

        </div>
    </div>)
}
export default FAQs