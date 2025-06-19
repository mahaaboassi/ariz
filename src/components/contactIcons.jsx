import { Link } from "react-router-dom"
import landline from "../assets/images/landline.png"
import mail from "../assets/images/mailIcone.png"
import phone from "../assets/images/call.png"
import Whatsapp from "../assets/images/phone.png"
import { useEffect, useRef, useState } from "react"

const ContactIcons = ()=>{
    const data = [{
        name : "Whatsapp",
        icon : Whatsapp,
        link : "https://wa.me/971589185328",
        id: 1,
        value : "+971 58 918 5328",
    },{
        name : "Mail",
        icon :mail,
        link : "mailto:info@arizglobal.com",
        id: 2,
        value : "info@arizglobal.com",
    },{
        name : "Phone",
        icon : phone,
        link : "tel:+971589185328",
        id: 3,
        value : "+971 58 918 5328",
    },{
        name : "Landline",
        icon : landline,
        link : "tel:+97143235609",
        id: 4,
        value : "+971 4 323 5609",
    }]
    const [ isOpen, setIsOpen] = useState({
        id : 0,
        action : false
    })
    const targetRef = useRef()
    const handleOpen = (e)=>{
         if (isOpen.id === e.id) { 
           setIsOpen({
                id: e.id,
                action: !isOpen.action
            });
        } else {
            setIsOpen({
                id: e.id,
                action: true
            });
        }
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (targetRef.current && !targetRef.current.contains(event.target)) {
            setIsOpen({
                id : 0,
                action : false
            });
        }
        };
        if (isOpen.action) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    return(<div ref={targetRef} className="icons-fixed">
        {data.map((e,idx)=><div onClick={()=>handleOpen(e)} className="conatiner-icon mb-2 cursor-pointer">
                <img className="w-5" src={e.icon} alt={e.name} />
                {(isOpen.id == e.id && isOpen.action) && <div className="value-icon p-3 ">
                    <Link to={e.link} target="_blank" className={`${(isOpen.id == e.id && isOpen.action) ? "show" : ""}`}>
                       <div className={`flex gap-2 value-icon-content `}>
                            {e.value}
                        </div>
                    </Link>
                        
                    </div>}
            </div>
           
        )}

    </div>)
}
export default ContactIcons