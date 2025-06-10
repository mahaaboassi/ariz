import Heading from "../../../components/heading"
import img from "../../../assets/images/shape-big.png"
import blog_1 from "../../../assets/images/blog-1.png"
import blog_2 from "../../../assets/images/blog-2.png"
import blog_3 from "../../../assets/images/blog-3.png"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper

import {Autoplay } from 'swiper/modules'; 


const Blogs = ()=>{
    const data = [{
        title : "Search Engine Optimization (SEO) with ARIZ Global",
        img : blog_1
    },{
        title : "Dubai’s Best Digital Marketing Agencies Reveal",
        img : blog_2
    },{
        title : "Dubai’s Best Digital Marketing Agencies Reveal",
        img : blog_3
    },{
        title : "Search Engine Optimization (SEO) with ARIZ Global",
        img : blog_2
    },]
    return(<div className="py-20 blogs flex flex-col gap-5">
        <Heading title={"Explore Ariz’s Blog for Top Design and Strategies!" } subTitle={"Driven Leadership, Proven Results"} />
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
                    data.map((e,idx)=>(<SwiperSlide key={`Blogs_${e.title}_${idx}`}>
                        <div className="blog">
                            <img className="w-full" src={e.img} alt={`Image_${idx}`} />
                            <h3>{e.title}</h3>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    </div>)
}
export default Blogs