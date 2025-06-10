import HeadingForDynamicPages from "../../components/headingForDynamicPages"
import Lines from "../../components/lines"
import Subscribe from "../../components/subscribe"
import { contactInfo } from "../../data/data"

const Contact = ()=>{
    return(<div className="contact">
        <Lines isWithGlow={true} children={<div className="pb-4 mt-32 flex flex-col gap-10 px-4 sm:px-10">
            <HeadingForDynamicPages basicTitle={"Keep on Touch"}  firstTitle={"Home"} link={"/"} secondTitle={"Contact"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <form className="p-8 flex flex-col gap-5">
                    <h4>Leave a Message</h4>
                    <div>
                        <input className="w-full" placeholder="Name" />
                    </div>
                    <div>
                        <input className="w-full" placeholder="Email" />
                    </div>
                     <div>
                        <input className="w-full" placeholder="subject" />
                    </div>
                     <div>
                        <textarea className="w-full" placeholder="Message" />
                    </div>
                    <div>
                        <button className="w-full">Submit</button>
                    </div>
                </form>
                <div className="flex flex-col gap-4">
                    <h2>Let’s Create the Future of Your Brand — Together</h2>
                    <p>Let’s connect and explore how we can transform your ideas into measurable results. Your future starts with a conversation.</p>
                    
                    {contactInfo.map((e,idx)=>(<div className="flex items-center p-4 card-info-contact" key={`Contact_Info_${e.name}_${idx}`}>
                        <div className="w-20">{e.icon}</div>
                        <div className="w-full">{e.value}</div>
                    </div>))}
                   
                </div>
            </div>
        </div>} />
        <div className="pt-10  px-4 sm:px-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.0641380903244!2d55.17030937566829!3d24.997936477839747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e8137cf3dd%3A0x85beecae1d102683!2sAriz%20Global!5e0!3m2!1sen!2sae!4v1749562197858!5m2!1sen!2sae"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Subscribe/>

    </div>)
}
export default Contact