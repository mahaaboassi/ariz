import Heading from "../../../components/heading"
import img from "../../../assets/images/shape-big.webp"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper

import {Autoplay } from 'swiper/modules'; 
import { blogsData } from "../../../data/data"
import { useNavigate } from "react-router-dom";


const Blogs = ()=>{
    const navigate = useNavigate()
    return(<div className="pb-20 blogs flex flex-col gap-5">
        <Heading title={"Explore Ariz’s Blog for Top Designs and Strategies!" } subTitle={"Driven Leadership, Proven Results"} />
       <div className="container-img-blog">
            <img src={img} alt={"shape-img"} />
        </div>
        <div className="px-4 sm:px-10">
            <Swiper
                loop={true}
                modules={[Autoplay]}
                slidesPerView={1}
                allowTouchMove={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                spaceBetween={30}
                breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 3 },
                   
                  }}
                >     
                {
                    blogsData.map((e,idx)=>(<SwiperSlide key={`Blogs_${e.title}_${idx}`}>
                        <div onClick={()=>navigate(`/blog/${e.link}`)} className="blog">
                            <img className="w-full" src={e.img} alt={`Image_${idx}`} />
                            <h3>{e.title}

                                 <span className="block mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 123 123" fill="none">
                                        <g clipPath="url(#clip0_708_978)">
                                        <path d="M81.61 4.73C81.61 2.12 84.19 0 87.38 0C90.57 0 93.15 2.12 93.15 4.73V25.45C93.15 28.06 90.57 30.18 87.38 30.18C84.19 30.18 81.61 28.06 81.61 25.45V4.73ZM29.61 4.73C29.61 2.12 32.19 0 35.38 0C38.57 0 41.15 2.12 41.15 4.73V25.45C41.15 28.06 38.57 30.18 35.38 30.18C32.19 30.18 29.61 28.06 29.61 25.45V4.73ZM6.4 45.32H116.48V21.47C116.48 20.67 116.15 19.94 115.62 19.4C115.09 18.87 114.36 18.54 113.55 18.54H103C101.23 18.54 99.8 17.11 99.8 15.34C99.8 13.57 101.23 12.14 103 12.14H113.55C116.12 12.14 118.45 13.19 120.14 14.88C121.83 16.57 122.88 18.9 122.88 21.47V48.53V113.56C122.88 116.13 121.83 118.46 120.14 120.15C118.45 121.84 116.12 122.89 113.55 122.89H9.33C6.76 122.89 4.43 121.84 2.74 120.15C1.05 118.45 0 116.12 0 113.55V48.53V21.47C0 18.9 1.05 16.57 2.74 14.88C4.43 13.19 6.76 12.14 9.33 12.14H20.6C22.37 12.14 23.8 13.57 23.8 15.34C23.8 17.11 22.37 18.54 20.6 18.54H9.33C8.53 18.54 7.8 18.87 7.26 19.4C6.73 19.93 6.4 20.66 6.4 21.47V45.32ZM116.48 51.73H6.4V113.55C6.4 114.35 6.73 115.08 7.26 115.62C7.79 116.15 8.52 116.48 9.33 116.48H113.55C114.35 116.48 115.08 116.15 115.62 115.62C116.15 115.09 116.48 114.36 116.48 113.55V51.73ZM50.43 18.54C48.66 18.54 47.23 17.11 47.23 15.34C47.23 13.57 48.66 12.14 50.43 12.14H71.92C73.69 12.14 75.12 13.57 75.12 15.34C75.12 17.11 73.69 18.54 71.92 18.54H50.43Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_708_978">
                                        <rect width="122.88" height="122.88" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    &nbsp;
                                {e.date}</span>
                            </h3>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    </div>)
}
export default Blogs