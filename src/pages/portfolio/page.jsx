import React, { useState, useEffect } from "react";
import Lines from "../../components/lines";
import HeadingForDynamicPages from "../../components/headingForDynamicPages";
import ShowCase from "../../components/showCase";
import { portfolioData } from "../../data/portfolio";



function Portfolio() {
  useEffect(()=>{
      window.scrollTo({ top: 0})
  },[])
  return (<article>
        <title>Our Portfolio</title>
        <meta 
          name="description" 
          content="Explore our portfolio of real projects and creative designs. From modern websites to innovative applications, discover how we deliver impactful results for diverse industries." 
        />
        <meta name="keywords" content="portfolio, web design, UI UX design, creative projects, case studies, website development, app design, Ariz Global portfolio" />
        <link rel="canonical" href="/portfolio" />

        {/* Open Graph for Facebook, LinkedIn, etc. */}
        <meta property="og:title" content="Our Portfolio" />
        <meta property="og:url" content="https://yourdomain.com/portfolio" />
        <meta 
          property="og:description" 
          content="Discover our portfolio of real projects, creative designs, and impactful solutions. Showcasing innovation, user-friendly experiences, and professional results." 
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Our Portfolio" />
        <meta 
          name="twitter:description" 
          content="Explore our portfolio of real projects and creative designs. See how we transform ideas into impactful digital solutions." 
        />
        <meta name="twitter:card" content="summary_large_image" />
    <div>
        <Lines children={<div className="pb-4 mt-32 flex flex-col gap-10 px-4 sm:px-10">
                <HeadingForDynamicPages basicTitle={"Our Portfolio"}  firstTitle={"Home"} link={"/"} secondTitle={"Our Portfolio"}  />
            </div>} />
        
        <div className="flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-col gap-5 px-4 sm:px-10 mb-16 mt-20">
                {portfolioData.map((e,i)=>{
                    return <ShowCase key={`Figma_Design_${i}`} 
                                    image={e.basic_img}
                                    name={e.name}
                                    isAvilable={e.isAvilable}
                                    link={e.link}
                    />
                })}
            </div>
    </div>
  </article>

  );
}

export default Portfolio;