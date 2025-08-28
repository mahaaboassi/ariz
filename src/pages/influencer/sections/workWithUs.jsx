import { useEffect, useState } from "react"
import { contactInfo } from "../../../data/data"
import { Link } from "react-router-dom"
import MobileInput from "../../../components/mobilePhone"

// for validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { changePopup } from "../../../features/popupSlice"
import { useDispatch } from "react-redux"
import AddSocialMedia from "./addSocialMedia";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format') // Ensures the email is valid
    .required('Email is required'),
    name: Yup.string().min(2,"Name must be at least 2 characters long").required('Name is required'),
    phone : Yup.string().matches(/^[0-9+\-() ]*$/, 'Phone number is not valid').required('Phone is required')   
  });


const Contact = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0})},[])
    const { register, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(validationSchema), 
            mode: 'onChange'   }
    );
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const [ code, setCode ] = useState("")
    const [ socialMedia, setSocialMedia ] = useState([])
    const onSubmit = async(value)=>{
        setLoading(true)
        const temp = {}
        const socialRows = socialMedia.map((e, i) => `
            <tr style="background-color: ${i % 2 === 0 ? "#F6F6F6" : "white"};">
                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">${e.name}</td>
                <td style="padding: 10px; border: 1px solid #DDD;">${e.value}</td>
            </tr>
        `).join(""); 
        temp.body = `<div style="margin:auto;width: 500px;color:#0B081D; border-radius:12px;background-color: white;border: 1px solid #0B081D;font-family: Arial, sans-serif;">
                    <!-- Header -->
                    <div style="background: #0B081D;border-top-left-radius:12px;border-top-right-radius:12px;padding:10px;">
                        <div style="margin: auto;text-align: center;">
                            <img style="height: 100px;" src="https://arizglobal.com/logo192.png" alt="ariz-logo" />
                        </div>
                    </div>

                    <!-- Body Content -->
                    <div style="padding: 20px;">
                        <h1 style="text-align: center; color: #C3996B; margin-bottom: 0;">Welcome to Ariz Global</h1>
                        <h4 style="text-align: center; color: #0B081D; margin-top: 5px;">Digital Marketing Agency</h4>

                        <p>Dear Admin,</p>
                        <p>A new influencer has reached out through the Ariz Global website. Their details are provided below:</p>

                        <!-- Stylish Table -->
                        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; color: #0B081D;">
                            <tr style="background-color: #F6F6F6;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Name</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Email</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.email}</td>
                            </tr>
                            <tr style="background-color: #F6F6F6;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Phone</td>
                                <td style="padding: 10px; border: 1px solid #DDD;"> ${"( " + code.dial_code +" ) "+ value.phone}</td>
                            </tr>
                            ${socialRows}
                        </table>

                        <div style="margin-top: 20px;">
                            <p style="margin: 0;">Best regards,</p>
                            <p style="margin: 0;">Ariz Global Team</p>
                        </div>
                    </div>

                    <!-- Button -->
                    <div style="text-align: center; padding-bottom: 20px;">
                        <a href="https://arizglobal.com/" target="_blank">
                            <button style="background-color: #C3996B; cursor: pointer; color: white; border: none; padding: 10px 20px; border-radius: 12px;">Go to Ariz Global</button>
                        </a>
                    </div>
                </div>`
        temp.userEmail = value.email
        // temp.adminEmail = "info@arizglobal.com"
        temp.adminEmail = "eng.mahaab96@gmail.com"  
        temp.subject = "New Influencer Registration – Ariz Global Website"
        const res = await fetch("https://api.arizglobal.com/api/mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(temp),
        });
        const data = await res.json();
        if (data.success) {
            
            dispatch(changePopup({
                    isOpen : true,
                    component  : <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="68" viewBox="0 0 512 468" fill="none">
                                <g clipPath="url(#clip0_773_1025)">
                                <path d="M58.327 0H312.623C300.639 13.787 289.779 27.299 279.982 40.444H58.327C53.398 40.444 48.912 42.454 45.671 45.671C42.3246 49.0335 40.4453 53.584 40.444 58.328V409.033C40.444 413.901 42.484 418.364 45.732 421.612C48.996 424.875 53.482 426.916 58.327 426.916H453.672C458.487 426.916 462.958 424.86 466.229 421.589C469.5 418.318 471.555 413.847 471.555 409.033V211.536C485.141 206.036 498.625 200.288 512 194.294V409.033C512 425.028 505.389 439.625 494.827 450.187C484.265 460.749 469.668 467.36 453.672 467.36H58.327C42.331 467.36 27.704 460.78 17.134 450.21C6.595 439.671 0 425.082 0 409.033V58.328C0 26.298 26.298 0 58.327 0Z" fill="#333333"/>
                                <path d="M137.419 167.477L200.11 166.652C202.026 166.628 203.909 167.153 205.537 168.165C218.215 175.494 230.176 183.855 241.326 193.286C249.277 200.025 256.787 207.267 263.81 214.967C285.782 180.156 312.386 144.642 340.319 111.328C374.871 70.1281 411.677 32.0831 444.409 2.72807C446.255 1.07263 448.648 0.158314 451.127 0.16107L499.198 0.12207C504.777 0.12207 509.309 4.65407 509.309 10.2331C509.309 12.9851 508.201 15.4921 506.413 17.3101C462.102 66.5591 416.637 122.99 375.444 180.806C337.354 234.272 302.848 289 276.214 340.418C273.661 345.363 267.57 347.312 262.626 344.759C260.507 343.667 258.844 341.858 257.933 339.654C243.351 308.458 225.881 279.73 205.017 253.975C184.13 228.197 159.773 205.33 131.45 185.888C126.857 182.754 125.673 176.465 128.806 171.872C130.808 168.937 134.102 167.393 137.419 167.477Z" fill="#01A601"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_773_1025">
                                <rect width="512" height="467.36" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <h2>Thank you for reaching out to us!</h2>
                        <p className="py-2">Your message has been successfully sent. </p> 
                        <p>Our team will get back to you as soon as possible.</p>
                    </div>
                }))
            setLoading(false)
        } else {
            if(data.status == 422 ){
                dispatch(changePopup({
                    isOpen : true,
                    component  : <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="68" viewBox="0 0 512 468" fill="none">
                            <g clipPath="url(#clip0_773_1030)">
                            <path d="M58.328 0H340.136C327.794 13.848 316.85 27.376 307.205 40.444H58.328C53.398 40.444 48.912 42.454 45.672 45.671C42.3248 49.0331 40.4452 53.5838 40.444 58.328V409.033C40.444 413.902 42.485 418.364 45.733 421.613C48.996 424.876 53.482 426.916 58.328 426.916H453.673C458.495 426.916 462.966 424.861 466.237 421.59C469.508 418.319 471.556 413.855 471.556 409.033V173.301C485.175 167.645 498.66 161.672 512 155.387V409.033C512 425.021 505.405 439.618 494.836 450.188C484.274 460.75 469.661 467.36 453.673 467.36H58.328C42.332 467.36 27.704 460.78 17.134 450.211C6.596 439.672 0 425.082 0 409.033V58.328C0 42.316 6.565 27.758 17.112 17.196L17.196 17.112C27.758 6.565 42.332 0 58.328 0Z" fill="#333333"/>
                            <path d="M133.575 346.12C152.529 308.871 182.961 266.447 219.477 225.132C185.613 192.033 150.717 161.317 118.344 135.685C113.552 131.902 112.734 124.924 116.518 120.132C118.154 118.05 120.488 116.63 123.09 116.135C149.036 111.007 169.541 113.445 187.845 121.462C205.705 129.295 220.837 142.242 236.688 158.589C243.52 165.643 251.178 173.874 259.317 182.923C265.397 176.887 271.562 170.938 277.812 165.078C334.978 111.489 398.953 65.7639 455.515 44.5179C461.247 42.3619 467.651 45.2509 469.806 50.9829C470.586 53.0576 470.728 55.3182 470.213 57.4741C469.698 59.63 468.55 61.5826 466.917 63.0809C443.402 88.1719 416.355 114.592 388.131 142.158C358.983 170.634 328.566 200.355 300.227 230.276C306.887 238.263 313.48 246.305 320.006 254.403C346.105 286.807 369.935 318.722 382.674 339.899C385.815 345.15 384.104 351.967 378.853 355.108C376.607 356.455 373.954 356.959 371.371 356.529L336.483 352.104C335.015 351.919 333.599 351.442 332.319 350.7C331.04 349.959 329.922 348.968 329.032 347.786C309.673 322.123 287.418 295.993 263.727 270.483C238.209 300.052 216.214 329.353 200.997 357.378C198.934 361.176 194.96 363.278 190.909 363.155L143.289 362.223C137.175 362.131 132.299 357.087 132.391 350.973C132.417 349.287 132.822 347.628 133.575 346.12Z" fill="#E60000"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_773_1030">
                            <rect width="512" height="467.36" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

                        </div>
                        <h2>Oops! Something went wrong.</h2>
                        <p className="py-2">{data.message} </p> 
                        <p>Please try again or contact us directly at <strong><a href="mailto:info@arizglobal.com">info@arizglobal.com</a></strong>.</p>
                    </div>
                }))
            }else{
                dispatch(changePopup({
                    isOpen : true,
                    component  : <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="68" viewBox="0 0 512 468" fill="none">
                            <g clipPath="url(#clip0_773_1030)">
                            <path d="M58.328 0H340.136C327.794 13.848 316.85 27.376 307.205 40.444H58.328C53.398 40.444 48.912 42.454 45.672 45.671C42.3248 49.0331 40.4452 53.5838 40.444 58.328V409.033C40.444 413.902 42.485 418.364 45.733 421.613C48.996 424.876 53.482 426.916 58.328 426.916H453.673C458.495 426.916 462.966 424.861 466.237 421.59C469.508 418.319 471.556 413.855 471.556 409.033V173.301C485.175 167.645 498.66 161.672 512 155.387V409.033C512 425.021 505.405 439.618 494.836 450.188C484.274 460.75 469.661 467.36 453.673 467.36H58.328C42.332 467.36 27.704 460.78 17.134 450.211C6.596 439.672 0 425.082 0 409.033V58.328C0 42.316 6.565 27.758 17.112 17.196L17.196 17.112C27.758 6.565 42.332 0 58.328 0Z" fill="#333333"/>
                            <path d="M133.575 346.12C152.529 308.871 182.961 266.447 219.477 225.132C185.613 192.033 150.717 161.317 118.344 135.685C113.552 131.902 112.734 124.924 116.518 120.132C118.154 118.05 120.488 116.63 123.09 116.135C149.036 111.007 169.541 113.445 187.845 121.462C205.705 129.295 220.837 142.242 236.688 158.589C243.52 165.643 251.178 173.874 259.317 182.923C265.397 176.887 271.562 170.938 277.812 165.078C334.978 111.489 398.953 65.7639 455.515 44.5179C461.247 42.3619 467.651 45.2509 469.806 50.9829C470.586 53.0576 470.728 55.3182 470.213 57.4741C469.698 59.63 468.55 61.5826 466.917 63.0809C443.402 88.1719 416.355 114.592 388.131 142.158C358.983 170.634 328.566 200.355 300.227 230.276C306.887 238.263 313.48 246.305 320.006 254.403C346.105 286.807 369.935 318.722 382.674 339.899C385.815 345.15 384.104 351.967 378.853 355.108C376.607 356.455 373.954 356.959 371.371 356.529L336.483 352.104C335.015 351.919 333.599 351.442 332.319 350.7C331.04 349.959 329.922 348.968 329.032 347.786C309.673 322.123 287.418 295.993 263.727 270.483C238.209 300.052 216.214 329.353 200.997 357.378C198.934 361.176 194.96 363.278 190.909 363.155L143.289 362.223C137.175 362.131 132.299 357.087 132.391 350.973C132.417 349.287 132.822 347.628 133.575 346.12Z" fill="#E60000"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_773_1030">
                            <rect width="512" height="467.36" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

                        </div>
                        <h2>Oops! Something went wrong.</h2>
                        <p className="py-2">We couldn't send your message. </p> 
                        <p>Please try again later or contact us directly at <strong><a href="mailto:info@arizglobal.com">info@arizglobal.com</a></strong>.</p>
                    </div>
                }))
            }
                
            setLoading(false)
        }
    }
    return(<div id="contact" className="contact">            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <form  onSubmit={handleSubmit(onSubmit)}  className="p-8 flex flex-col gap-5">
                    <h4>Work With Us</h4>
                    <div>
                        <input  {...register("name")}  className="w-full" placeholder="Full Name" />
                            {errors.name && <p className="p-0.5 text-error">{errors.name.message}</p>}
                    </div>
                    <div>
                        <input {...register("email")} className="w-full" placeholder="Email" />
                        {errors.email && <p className="p-0.5 text-error">{errors.email.message}</p>}
                    </div>
                    <div>
                        <MobileInput register={register("phone")} returnedCountry={(res)=>{setCode(res)}} />
                        {errors.phone && <p className="p-0.5 text-error">{errors.phone.message}</p>}
                    </div>
                    <div className="flex gap-2 add-soical-media items-center">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 55 56" fill="none">
                                <g clipPath="url(#clip0_1052_969)">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M27.5 0.879883C32.939 0.879883 38.2558 2.49273 42.7782 5.51447C47.3005 8.53621 50.8253 12.8311 52.9067 17.8561C54.9881 22.8811 55.5327 28.4104 54.4716 33.7449C53.4105 39.0793 50.7914 43.9794 46.9454 47.8253C43.0995 51.6713 38.1995 54.2904 32.865 55.3515C27.5305 56.4126 22.0012 55.868 16.9762 53.7866C11.9512 51.7052 7.65632 48.1804 4.63459 43.6581C1.61285 39.1357 0 33.8189 0 28.3799C0 21.0864 2.89731 14.0917 8.05456 8.93445C13.2118 3.7772 20.2065 0.879883 27.5 0.879883ZM41.9796 25.5914V31.1639C41.9784 31.712 41.7601 32.2373 41.3726 32.6248C40.9851 33.0123 40.4598 33.2306 39.9117 33.2318H32.3519V40.7916C32.3507 41.3397 32.1325 41.8649 31.7449 42.2525C31.3574 42.64 30.8321 42.8583 30.284 42.8595H24.7115C24.1642 42.8571 23.6401 42.6383 23.2535 42.2509C22.8669 41.8635 22.6493 41.3389 22.6481 40.7916V33.2318H15.0838C14.5365 33.2294 14.0124 33.0106 13.6258 32.6232C13.2392 32.2358 13.0216 31.7112 13.0204 31.1639V25.5914C13.0228 25.0449 13.2409 24.5214 13.6274 24.135C14.0138 23.7485 14.5373 23.5304 15.0838 23.528H22.6481V15.9637C22.6505 15.4172 22.8686 14.8937 23.2551 14.5073C23.6415 14.1208 24.165 13.9027 24.7115 13.9003H30.284C30.8313 13.9015 31.3559 14.1191 31.7433 14.5057C32.1308 14.8923 32.3495 15.4164 32.3519 15.9637V23.528H39.9117C40.459 23.5292 40.9836 23.7468 41.371 24.1334C41.7584 24.52 41.9772 25.0441 41.9796 25.5914Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1052_969">
                                <rect width="55" height="55" fill="white" transform="translate(0 0.879883)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            Add your social media
                        </div>
                    </div>
                    <AddSocialMedia returnData={(res)=>setSocialMedia(res)} />
                    <div>
                        <button disabled={loading} className="w-full">{loading?<div className="spinner m-auto"></div>:"Submit"}</button>
                    </div>
                </form>
                <div className="flex flex-col gap-4">
                    <h2>Let’s Create the Future of Your Brand — Together</h2>
                    <p>Let’s connect and explore how we can transform your ideas into measurable results. Your future starts with a conversation.</p>
                    
                    {contactInfo.map((e,idx)=>(<Link to={e.link} target="_blank" key={`Contact_Info_${e.name}_${idx}`} >
                        <div className="flex items-center p-4 card-info-contact" >
                            <div className="w-20">
                                <img alt={e.name} src={e.icon} />
                            </div>
                            <div className="w-full">{e.value}</div>
                        </div>
                    </Link>))}
                
                </div>
            </div>
        </div>
)
}
export default Contact