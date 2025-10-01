// Project Images 
import figma_1 from "../assets/images/portfolio/pro_1.webp";
import figma_2 from "../assets/images/portfolio/pro_2.webp";
import figma_3 from "../assets/images/portfolio/pro_3.webp";
import figma_4 from "../assets/images/portfolio/pro_4.png";
import figma_5 from "../assets/images/portfolio/pro_5.webp";
import figma_6 from "../assets/images/portfolio/pro_6.webp";
import figma_7 from "../assets/images/portfolio/pro_7.webp";
import figma_8 from "../assets/images/portfolio/pro_8.webp";

// Mockup Images
import des_1 from "../assets/images/portfolio/des_1.png";
import des_2 from "../assets/images/portfolio/des_2.png";
import des_3 from "../assets/images/portfolio/des_3.png";
import des_4 from "../assets/images/portfolio/des_4.png";
import des_5 from "../assets/images/portfolio/des_5.png";
import des_6 from "../assets/images/portfolio/des_6.png";

// Basic Images
import pro_1 from "../assets/images/portfolio/mockup_pro_1.webp";
import pro_2 from "../assets/images/portfolio/mockup_pro_2.webp";
import pro_3 from "../assets/images/portfolio/mockup_pro_3.webp";
import pro_4 from "../assets/images/portfolio/mockup_pro_4.webp";
import pro_5 from "../assets/images/portfolio/mockup_pro_5.webp";
import pro_6 from "../assets/images/portfolio/mockup_pro_6.webp";
import pro_7 from "../assets/images/portfolio/mockup_pro_7.webp";


// Websites 
// Food
import food_website_mockup_1 from "../assets/images/websites/food_website_mockup_1.webp"
import food_website_mockup_2 from "../assets/images/websites/food_website_mockup_2.webp"
import food_website_mockup_3 from "../assets/images/websites/food_website_mockup_3.webp"
import food_website_mockup_4 from "../assets/images/websites/food_website_mockup_4.webp"
// Hospital
import hospital_website_mockup_1 from "../assets/images/websites/hospital_website_mockup_1.webp"
import hospital_website_mockup_2 from "../assets/images/websites/hospital_website_mockup_2.webp"
import hospital_website_mockup_3 from "../assets/images/websites/hospital_website_mockup_3.webp"
import hospital_website_mockup_4 from "../assets/images/websites/hospital_website_mockup_4.webp"
// Rental
import rental_website_mockup_1 from "../assets/images/websites/rental_website_mockup_1.webp"
import rental_website_mockup_2 from "../assets/images/websites/rental_website_mockup_2.webp"
import rental_website_mockup_3 from "../assets/images/websites/rental_website_mockup_3.webp"
import rental_website_mockup_4 from "../assets/images/websites/rental_website_mockup_4.webp"
// Dental
import dental_website_mockup_1 from "../assets/images/websites/dental_website_mockup_1.webp"
import dental_website_mockup_2 from "../assets/images/websites/dental_website_mockup_2.webp"
import dental_website_mockup_3 from "../assets/images/websites/dental_website_mockup_3.webp"
import dental_website_mockup_4 from "../assets/images/websites/dental_website_mockup_4.webp"
// Car
import car_website_mockup_1 from "../assets/images/websites/car_website_mockup_1.webp"
import car_website_mockup_2 from "../assets/images/websites/car_website_mockup_2.webp"
import car_website_mockup_3 from "../assets/images/websites/car_website_mockup_3.webp"
import car_website_mockup_4 from "../assets/images/websites/car_website_mockup_4.webp"
// ICT
import ICT_website_mockup_1 from "../assets/images/websites/ICT_website_mockup_1.webp"
import ICT_website_mockup_2 from "../assets/images/websites/ICT_website_mockup_2.webp"
import ICT_website_mockup_3 from "../assets/images/websites/ICT_website_mockup_3.webp"
import ICT_website_mockup_4 from "../assets/images/websites/ICT_website_mockup_4.webp"
// Hotel
import hotel_website_mockup_1 from "../assets/images/websites/hotel_website_mockup_1.webp"
import hotel_website_mockup_2 from "../assets/images/websites/hotel_website_mockup_2.webp"
import hotel_website_mockup_3 from "../assets/images/websites/hotel_website_mockup_3.webp"
import hotel_website_mockup_4 from "../assets/images/websites/hotel_website_mockup_4.webp"

// Social Images
import social_intellectra_1 from "../assets/images/social/social_intellectra.webp"
import social_tumbi_1 from "../assets/images/social/social_tumbi.webp"
import social_foreshore_1 from "../assets/images/social/social_foreshore.webp"

export const portfolioData = [
  {
    name: "Food Delivery",
    link: "/food_delivery_platform",
    goals: [
      "Deliver a smooth and intuitive user experience for browsing menus and placing orders.",
      "Enable real-time order tracking for customers and restaurants.",
      "Ensure the platform is responsive and optimized for both desktop and mobile devices.",
      "Build a scalable solution capable of supporting multiple restaurants and high traffic.",
      "Strengthen brand trust by providing a secure and reliable ordering system."
    ],
    about: "The Food Delivery Platform was developed to provide users with a seamless way to browse restaurants, place orders, and track deliveries in real time. The goal was to create a modern, user-friendly application that bridges the gap between restaurants and customers, offering convenience, speed, and reliability. The platform was designed to support both web and mobile users, ensuring accessibility anytime, anywhere.",
    img: pro_1,
    basic_img : figma_1,
    isAvilable : 1,
    category: "Food",
    technologies: [{ name : "Figma" }],
    mockups : {
      website: [food_website_mockup_1,food_website_mockup_2,food_website_mockup_3,food_website_mockup_4],
      design: []
    }
  },
  {
    name: "Hospital",
    link: "/hospital_website_design",
    goals: [
      "Provide a clear and informative platform for patients to explore hospital services.",
      "Enable easy appointment scheduling and patient communication.",
      "Ensure a responsive and accessible design for both desktop and mobile users.",
      "Enhance trust and professionalism through a modern and clean visual design."
    ],
    about: "The Hospital Website Design project aimed to create an informative and user-friendly platform for patients and visitors. The design focused on clarity, accessibility, and ease of navigation, allowing users to easily find information about services, departments, and healthcare professionals. The platform is optimized for both desktop and mobile usage, reflecting a professional and trustworthy healthcare brand.",
    img: pro_2,
    basic_img : figma_5,
    isAvilable : 1,
    category: "Hospital",
    technologies: [{ name: "Figma" }],
    mockups : {
      website: [hospital_website_mockup_1,hospital_website_mockup_2,hospital_website_mockup_3,hospital_website_mockup_4],
      design: []
    }
  },
  {
    name: "Foreshore Properties",
    link: "/rental_properties_website",
    goals: [
      "Provide an intuitive browsing experience for property listings.",
      "Enable easy filtering and searching of rental properties.",
      "Ensure responsive design for desktop and mobile users.",
      "Highlight property details and images effectively to attract potential tenants."
    ],
    about: "The Rental Properties Website was designed to help users easily search and explore available rental properties. The platform features clear property listings with detailed information, high-quality images, and filtering options to streamline the search process. The design prioritizes usability and responsiveness to ensure an enjoyable browsing experience across devices.",
    img: pro_3,
    basic_img : figma_2,
    isAvilable : 0,
    category: "Rental",
    technologies: [{ name: "Figma" }],
    mockups : {
      website: [rental_website_mockup_1,rental_website_mockup_2,rental_website_mockup_3,rental_website_mockup_4],
      design: [],
      social : social_foreshore_1
    }
  },
  {
    name: "Dental Clinic",
    link: "/dental_clinic_landing_page",
    goals: [
      "Create a visually appealing and professional landing page for the clinic.",
      "Provide essential information about services and practitioners.",
      "Encourage users to schedule appointments easily.",
      "Ensure responsive design for mobile and desktop platforms."
    ],
    about: "The Dental Clinic Landing Page project focused on delivering a professional and inviting online presence for the clinic. The design emphasizes clarity, service details, and practitioner profiles while offering a simple path for users to book appointments. Optimized for both mobile and desktop, the landing page strengthens the clinic’s brand and credibility.",
    img: pro_4,
    basic_img : figma_3,
    isAvilable : 1,
    category: "Dental",
    technologies: [{ name: "Figma" }],
    mockups : {
      website: [dental_website_mockup_1,dental_website_mockup_2,dental_website_mockup_3,dental_website_mockup_4],
      design: []
    }
  },
  {
    name: "Car Store",
    link: "/car_store_landing_page",
    goals: [
      "Showcase car models and promotions effectively.",
      "Enable easy navigation and vehicle browsing for users.",
      "Provide a responsive design optimized for mobile and desktop.",
      "Highlight the brand identity and drive customer engagement."
    ],
    about: "The Car Store Landing Page was designed to provide an engaging and visually appealing platform for car shoppers. The design showcases available vehicles, promotions, and brand identity, ensuring users can easily explore models and features. The landing page is fully responsive, offering a seamless experience across devices.",
    img: pro_7,
    basic_img : figma_8,
    isAvilable : 1,
    category: "Automotive",
    technologies: [{ name: "Figma" }],
    mockups : {
      website: [car_website_mockup_1,car_website_mockup_2,car_website_mockup_3,car_website_mockup_4],
      design: []
    }
  },
  {
    name: "Intellectra",
    link: "/ict_systems_website",
    goals: [
      "Present the company’s IT solutions and services professionally.",
      "Enable potential clients to explore offerings and get in touch easily.",
      "Ensure a modern, responsive design for all devices.",
      "Strengthen credibility and showcase technical expertise."
    ],
    about: "The ICT Systems Website project aimed to provide a comprehensive online presence for the company’s IT services. The platform highlights solutions, case studies, and service offerings, designed with clarity and professionalism. Optimized for both desktop and mobile, the website supports brand credibility and client engagement.",
    img: pro_6,
    basic_img : figma_7,
    isAvilable : 0,
    category: "Technology",
    technologies: [{ name: "Figma" }],
    mockups : {
      website: [ICT_website_mockup_1,ICT_website_mockup_2,ICT_website_mockup_3,ICT_website_mockup_4],
      design: [],
      social: social_intellectra_1

    }
  },
  {
    name: "Tumbi Hotels",
    link: "/hotel_rooms_landing_page",
    goals: [
      "Display available hotel rooms with clear details and images.",
      "Enable easy booking and navigation through available options.",
      "Ensure a responsive and visually appealing design for all users.",
      "Enhance the hotel’s brand identity and online presence."
    ],
    about: "The Hotel Rooms Landing Page project focuses on providing users with a visually appealing platform to explore and book hotel rooms. It emphasizes high-quality visuals, easy navigation, and responsive design to ensure a smooth user experience across devices. The landing page strengthens the hotel’s brand and encourages direct bookings.",
    img: pro_5,
    basic_img : figma_6,
    isAvilable : 0,
    category: "Hotel",
    technologies: [{ name: "Figma" }],
    mockups : {
      design: [des_5, des_6, des_2, des_1],
      website: [hotel_website_mockup_1,hotel_website_mockup_2,hotel_website_mockup_3,hotel_website_mockup_4],
      social: social_tumbi_1
    }
  }
];