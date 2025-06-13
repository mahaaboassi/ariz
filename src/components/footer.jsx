import { Link } from "react-router-dom"
import img from "../assets/images/logo-footer.png"

const Footer = ()=>{
    const  pages = [{
        name : "Home",
        link : "/"
    },{
        name : "About",
        link : "/about"
    },{
        name : "blogs",
        link : "/"
    },{
        name : "Contact",
        link : "/contact"
    }]
    const services = [{
        name : "PPC & Paid Advertising",
        link : ""
    },{
        name : "Social Media Strategy ",
        link : ""
    },{
        name : "Social Media Strategy ",
        link : ""
    },{
        name : "See More",
        link : ""
    }]
    const support = [{
        name : "FAQ",
        link : "/faqs"
    },{
        name : "Privacy policy",
        link : "/privacy"
    },{
        name : "Terms & Conditions",
        link : "/Terms"
    }]
    const icons = [{
        name : "Instagram",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_603_1102)">
            <path d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64063 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98437 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60312 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07813 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82813 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6563C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6563C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76563C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z" fill="white"/>
            <path d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z" fill="white"/>
            <path d="M13.2312 3.72793C13.2312 4.25918 12.8 4.68731 12.2719 4.68731C11.7406 4.68731 11.3125 4.25606 11.3125 3.72793C11.3125 3.19668 11.7438 2.76855 12.2719 2.76855C12.8 2.76855 13.2312 3.19981 13.2312 3.72793Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_603_1102">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>,
        link : "https://www.instagram.com/arizglobaluae"
    },{
        name : "facebook",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
            <path d="M6.03254 4.05545V6.59296H8.99937L8.52962 10.0119H6.03254V17.888C5.53173 17.9618 5.01951 18 4.49968 18C3.89934 18 3.31041 17.949 2.73607 17.8511V10.0119H0V6.59296H2.73607V3.48865C2.73607 1.56221 4.21187 0 6.03317 0V0.00201273C6.03824 0.00201273 6.04331 0 6.04839 0H9V2.95606H7.07157C6.49786 2.95606 6.03317 3.44774 6.03317 4.05478L6.03254 4.05545Z" fill="white"/>
            </svg>,
        link : "https://www.facebook.com/arizglobal?_rdr"
    },{
        name : "Youtube",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.8207 5.4001C17.8207 5.4001 17.6449 4.15908 17.1035 3.61416C16.418 2.89697 15.6516 2.89346 15.3 2.85127C12.7828 2.66846 9.00352 2.66846 9.00352 2.66846H8.99648C8.99648 2.66846 5.21719 2.66846 2.7 2.85127C2.34844 2.89346 1.58203 2.89697 0.896484 3.61416C0.355078 4.15908 0.182812 5.4001 0.182812 5.4001C0.182812 5.4001 0 6.85908 0 8.31455V9.67861C0 11.1341 0.179297 12.5931 0.179297 12.5931C0.179297 12.5931 0.355078 13.8341 0.892969 14.379C1.57852 15.0962 2.47852 15.0716 2.8793 15.1489C4.3207 15.286 9 15.3282 9 15.3282C9 15.3282 12.7828 15.3212 15.3 15.1419C15.6516 15.0997 16.418 15.0962 17.1035 14.379C17.6449 13.8341 17.8207 12.5931 17.8207 12.5931C17.8207 12.5931 18 11.1376 18 9.67861V8.31455C18 6.85908 17.8207 5.4001 17.8207 5.4001ZM7.14023 11.3345V6.27549L12.0023 8.81377L7.14023 11.3345Z" fill="white"/>
                </svg>,
        link : "https://www.youtube.com/@arizglobal"
    },
    // {
    //     name : "Tiktok",
    //     icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    //             <path d="M11.3823 0H8.68586V10.8985C8.68586 12.1971 7.64878 13.2638 6.35816 13.2638C5.06754 13.2638 4.03044 12.1971 4.03044 10.8985C4.03044 9.6232 5.0445 8.57969 6.28903 8.53333V5.79711C3.54646 5.84347 1.33398 8.09276 1.33398 10.8985C1.33398 13.7276 3.59256 16 6.38122 16C9.16983 16 11.4284 13.7044 11.4284 10.8985V5.31013C12.4425 6.05218 13.687 6.49276 15.0007 6.51596V3.77971C12.9726 3.71015 11.3823 2.04058 11.3823 0Z" fill="white"/>
    //             </svg>,
    //     link : "/"
    // },
    {
        name : "Linkedin",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <path d="M0.560262 3.19885C0.186482 2.84241 0 2.40142 0 1.87671C0 1.35199 0.186482 0.891101 0.560262 0.534661C0.934043 0.178221 1.41519 0 2.00532 0C2.59546 0 3.05725 0.178221 3.43022 0.534661C3.804 0.891101 3.99048 1.33873 3.99048 1.87671C3.99048 2.41468 3.804 2.84241 3.43022 3.19885C3.05644 3.55529 2.58174 3.7335 2.00532 3.7335C1.42891 3.7335 0.934043 3.55529 0.560262 3.19885ZM3.67563 5.24299V16.1658H0.31484V5.24299H3.67563Z" fill="#FEFFFC"/>
        <path d="M14.8631 6.32165C15.5953 7.13814 15.9618 8.25968 15.9618 9.6871V15.9737H12.7689V10.1306C12.7689 9.41107 12.5873 8.85154 12.224 8.45282C11.8607 8.05411 11.3723 7.85517 10.7587 7.85517C10.1452 7.85517 9.65675 8.05494 9.29347 8.45282C8.93018 8.85154 8.74854 9.41107 8.74854 10.1306V15.9737H5.53711V5.21337H8.74854V6.64078C9.07388 6.16498 9.51225 5.78947 10.0636 5.51261C10.6142 5.23658 11.2342 5.09814 11.9229 5.09814C13.15 5.09814 14.13 5.5068 14.8622 6.32247L14.8631 6.32165Z" fill="#FEFFFC"/>
        </svg>,
        link : "https://www.linkedin.com/company/ariz-global/posts/?feedView=all"

        
    }]
    return(<footer className="px-4 sm:px-10 flex py-10 gap-6 lg:gap-5 xl:gap-10" >
            <div className="first-col-in-footer flex flex-col gap-5">
                <div>
                    <img src={img} className="w-2xs" alt="Ariz Global Logo" />
                </div>
                <p>
                    Ariz Global is a results-driven digital marketing agency specializing in creative branding, content strategy, and growth marketing. With deep expertise in public relations, paid media, and social storytelling, we help businesses—from startups to global enterprises—elevate their presence, drive traffic, and generate leads.
                </p>
                <p> © 2025 by Ariz Global</p>
            </div>
            <div className="second-col-in-footer grid grid-cols-1 g sm:grid-cols-3 gap-5 lg:gap-5  xl:gap-10 ">
                <div className="flex flex-col gap-2 sm:gap-5 pages">
                    <h5>Pages</h5>
                    {pages.map((e,idx)=>(<Link key={`Pages_Footer_${e.name}_${idx}`} >
                        <div>{e.name}</div>
                    </Link>))}
                </div>
                <div className="flex flex-col gap-2 sm:gap-5 pages">
                    <h5>Support</h5>
                    {support.map((e,idx)=>(<Link key={`Pages_Footer_${e.name}_${idx}`} >
                        <div>{e.name}</div>
                    </Link>))}
                </div>
                <div className="flex flex-col justify-between gap-2 ">
                    <div className="flex flex-col gap-2 ">
                        <h5>Newsletter</h5>
                        <div className="input-footer">
                            <div className="input-container">
                                <input className="h-full w-full" placeholder="Enter Email" />
                            </div>
                            <div className="icon-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 13 8" fill="none"><path d="M13 4L9.00002 0V3H0V5H9.00002V8L13 4Z" fill="white"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5>Follow us</h5>
                        <div className="flex gap-2">
                            {icons.map((e,idx)=>(<Link key={`Social_Media_${e.name}_${idx}`} to={e.link} target="_blank">
                            <div className="icon-footer" >
                                <div className="icon-container">{e.icon}</div>
                            </div>
                            </Link>))}
                        </div>
                    </div>
                </div>
            </div>
    </footer>)
}
export default Footer