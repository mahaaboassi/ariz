import { useEffect, useState } from "react"
import HeadingForDynamicPages from "../../components/headingForDynamicPages"
import Lines from "../../components/lines"
import { FAGs } from "../../data/data"
import Accordion from "../../components/accordion"
import { MetaData } from "../../data/meta"

const FAQs = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0})},[])
    const [openIndex, setOpenIndex] = useState(null);
    
    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return(<article>

            <title>{MetaData.faqs.title}</title>
            <meta name="description" content={MetaData.faqs.description} />
            <meta name="keywords" content={MetaData.faqs.keywords} />
            <link rel="canonical" href={MetaData.faqs.link} />


        <div className="flex flex-col gap-10">
            <Lines children={<div className="pb-4 mt-32 flex flex-col gap-10 px-4 sm:px-10">
                <HeadingForDynamicPages basicTitle={"Frequently Asked Questions"}  firstTitle={"Home"} link={"/"} secondTitle={"FAQs"}  />
            </div>} />
            <div className="flex flex-col gap-5 px-4 sm:px-10 mb-16 md:w-3/4 m-auto">
                    {FAGs.map((e,idx)=>(<Accordion 
                                    key={`FAQs_${e.question}_${idx}`}
                                    question={e.question} answer={e.answer}  
                                    isOpen={openIndex === idx}
                                    onClick={() => handleToggle(idx)}
                                    />))}
            </div>
        </div>
    </article>)
}
export default FAQs