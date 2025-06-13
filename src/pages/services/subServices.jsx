import { useParams } from "react-router-dom"
import Lines from "../../components/lines"
import shape from "../../assets/images/shape-big.png"
import img from "../../assets/images/img.png"
import HeadingForDynamicPages from "../../components/headingForDynamicPages"
import { useEffect, useState } from "react"
import { services } from "../../data/data"
import Heading from "../../components/heading"
import Subscribe from "../../components/subscribe"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper

import {Autoplay } from 'swiper/modules'; 


const SubServices = ()=>{
    const { link } = useParams()
    const [ currentServices, setCurrentServices ] = useState({})
    useEffect(()=>{setCurrentServices(services.find((e)=> e.link == `/services/${link}`))},[link])
    return("name" in currentServices && <div className="sub-services flex flex-col gap-10">
        <Lines children={<div className="pb-4 mt-32 flex flex-col gap-10 px-4 sm:px-10">
            <HeadingForDynamicPages basicTitle={currentServices.name}  firstTitle={"Home"} link={"/"} secondTitle={"services"} />
            <div className="flex justify-center items-center image-as-svg">
                {/* <img  alt="Services" src={img} /> */}
                {currentServices.img}
            </div>
            </div>} />

        <div className=" relative">
                <div className="container-img-blog">
                    <img src={shape} alt={"shape-img"} />
                </div>
                <div className="px-4 sm:px-10">
                    <Heading title={currentServices.section_1.title} subTitle={currentServices.section_1.sub_title} />
                    <div className="text-center">
                        {currentServices.section_1.description}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                        {currentServices.section_1.services.map((e,idx)=><div  key={`services_${currentServices.name}_${e.title}_${idx}`} className="card-about p-3 md:p-5 flex flex-col gap-5" >
                            <div className="flex gap-3 items-center">
                                <div>{e.icon}</div>
                                <h2>{e.title}</h2>
                            </div>
                            <p>{e.sub_title}</p>
                            <ul>{e.options.map((ele,i)=><li key={`services_${currentServices.name}_${e.title}_${ele}_${i}`} >{ele}</li>)}</ul>
                        </div>)}
                    </div>
                </div>
        </div>
        <div className="px-4 sm:px-10 ">
            <Heading title={currentServices.section_2.title} subTitle={currentServices.section_2.sub_title} />

            <div>
                <Swiper
                    loop={true}
                    modules={[Autoplay]}
                    slidesPerView={1}
                    allowTouchMove={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    spaceBetween={30}
                    breakpoints={{
                            320: { slidesPerView: 1 },
                            500: { slidesPerView: 2 },
                            800: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 4 },
                    
                    }}
                    >     
                    {
                        currentServices.section_2.technologies.map((e,idx)=>(<SwiperSlide key={`Tools_${currentServices.name}_${e.name}_${idx}`}>
                            <div className="card-tools m-auto gap-5" >
                            <div className="icon-card">{e.icon}</div>
                            <h4 className="text-center ">{e.name}</h4>
                        </div>
                        </SwiperSlide>))
                    }
                </Swiper>
            </div>
        </div>
        <Subscribe/>
    </div>)
}
export default SubServices