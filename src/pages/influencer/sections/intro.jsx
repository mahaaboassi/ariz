"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import inf_1 from "../../../assets/images/influencer_1.webp";
import inf_2 from "../../../assets/images/influencer_2.webp";
import inf_3 from "../../../assets/images/influencer_3.webp";
import video from "../../../assets/videos/final_influencer_less_size.mp4"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import {Autoplay } from 'swiper/modules';

// Icons
import icon_1 from "../../../assets/images/instagram.png"
import icon_2 from "../../../assets/images/facebook.png"
import icon_3 from "../../../assets/images/tiktok.png"
import icon_4 from "../../../assets/images/twitter.png"
import icon_5 from "../../../assets/images/linkedin.png"
import icon_6 from "../../../assets/images/snapchat.png"
import icon_7 from "../../../assets/images/google.png"


const Intro = () => {
  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale video as you scroll
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  // Fade out images on scroll
  const moveLeft = useTransform(scrollYProgress, [0, 1], [0, -100]); // left side
  const moveRight = useTransform(scrollYProgress, [0, 1], [0, 100]); // right side
  const data = [
        { name: "Instagram", icon: icon_1 },
        { name: "Facebook", icon: icon_2 },
        { name: "TikTok", icon: icon_3 },
        { name: "Twitter", icon: icon_4 },
        { name: "Linkedin", icon: icon_5 },
        { name: "Snapchat", icon: icon_6 },
        { name: "Google", icon: icon_7 }
   ];

  return (
    <div ref={ref} className="intro-influencer  py-10">
      <div className="relative overflow-hidden w-full container-intro">
        {/* Button */}
        <div className="container-button relative ">
          <a href={"#contact"}>
            <button className="">
              Work with Us
            </button>
          </a>
        </div>

        {/* Images */}
        <motion.div
          style={{ x: moveLeft }}
          className="info-img-1 absolute left-20 top-5"
        >
          <img src={inf_1} alt="Influencer 1" />
        </motion.div>
        <motion.div
          style={{ x: moveLeft }}
          className="info-img-2 absolute left-20 top-1/2"
        >
          <img src={inf_2} alt="Influencer 2" />
        </motion.div>
        <motion.div
          style={{ x: moveRight }}
          className="info-img-3 absolute right-20 top-10"
        >
          <img src={inf_3} alt="Influencer 3" />
        </motion.div>

        {/* Video */}
        <motion.div
          style={{ scale: videoScale }}
          className="video-influencer absolute inset-0 pt-20 lg:pt-30 "
        >
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h2 className="mt-6 text-center">
        We handle licensing, branding, social media, and influencer marketing
      </h2>

      <div className="flex gap-4 px-4 sm:px-10 icons-social-media py-10">
          <Swiper
                loop={true}
                modules={[Autoplay]}
                freeMode={true}
                speed={5000}
                slidesPerView={2}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                   
                  }}
                >     
                {
                    data.map((e,idx)=>(<SwiperSlide key={`Icons_${e.name}_${idx}`}>
                        <div >
                            <img className="h-16" src={e.icon} alt={e.name}/>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
      </div>
    </div>
  );
};

export default Intro;
