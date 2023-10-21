import React from 'react'
import "../Projects/Projects.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import FrontendDevelopment from "../Images/frontenddevelopment.png"
import MizpahFamily from "../Images/Mizpahfamily.png"
import TravelAgency from "../Images/travelagency.png"
import VideoImage1 from "../Images/video1.png"
import VideoImage2 from "../Images/video2.png"
import LittleLemon from "../Images/LittleLemon.jpeg"


const projectsdata = [
    {   type: "website",
        src : MizpahFamily,
        title: "MIZPAH INTERATIONAL MINISTRY",
        des: "Check out my work on the Mizpah International Ministry project. I used React to build a dynamic and user-friendly website, showcasing my proficiency in modern web development practices. Being based in Ohio, I've managed to transform the ministry's online presence, reflecting my skills in Strategic Planning, Team Leadership, and Digital Marketing. Dive in to see the impact of my work!",
        buttonlink:"https://mizpahfamily.com"
    },
    {
        type: "website",
        src : TravelAgency,
        title: "MIZPAH TRAVEL AGENCY",
        des: "I single-handedly developed and deployed a project, optimizing it for peak performance. My skills in HTML and CSS came to the fore when I constructed a website for Mizpah Travel Agency, enhancing their online presence. Furthermore, I managed their email marketing, boosting engagement across all their platforms.",
        buttonlink:"https://mizpah-travel-agency.com"
    },
    {
        type: "mobile application",
        src : LittleLemon,
        title: "Little Lemon App",
        des: "My first mobile app, Little Lemon, is a testament to my intellectual skills and adaptability. Developed through Coursera, this project allowed me to explore and master React Native, a leading technology in mobile app development. Little Lemon showcases my ability to learn quickly, solve complex problems, and create user-friendly mobile applications. This project is a clear demonstration of my potential as a mobile app developer.",
        buttonlink:"https://www.tiktok.com/@gyamfinanaagyeman/video/7292520112974892293"
    },
    {
        type: "website",
        src : FrontendDevelopment,
        title: "BECOME A FRONTEND DEVELOPER",
        des: "In the initial stages of my web development journey, I created this website using only HTML, CSS, and vanilla JavaScript. While it may not be perfect, it shows significant progress within just my first month of programming. This project stands as a testament to my rapid learning and adaptability.",
        buttonlink:"https://app-sigma-seven.vercel.app/"
    },
    {
        type: "video",
        src : VideoImage1,
        title: "Video Editting 1",
        des: "This is a video I meticulously edited for Mizpah Travel Agency. This project allowed me to demonstrate my ability to tell a compelling story through video, showcasing the agency's services in a dynamic and engaging way. With careful attention to detail, I was able to highlight the unique aspects of their business, resulting in a video that not only informs but also entertains. This project truly reflects my skills in video editing and my commitment to delivering high-quality results.",
        buttonlink:"https://www.tiktok.com/@mizpah_travel2023/video/7285322572856659242"
    },
    {
        type: "video",
        src : VideoImage2,
        title: "Video Editting 2",
        des: "Another notable project in my Hall of Fame is a second video I edited for Mizpah Travel Agency. This project further showcases my video editing skills, as I was tasked with creating a different narrative that highlights another aspect of their services. Through innovative editing techniques, I was able to craft a video that captures the viewer's attention and effectively communicates the agency's message. This second video stands as another testament to my versatility and creativity in video editing.",
        buttonlink:"https://www.tiktok.com/@mizpah_travel2023"
    },
]

const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
            </div>
            <div className=" ">
                <h1 className="font-titleFonts text-center text-6xl pb-4">My Hall Of Fame</h1>
                <p className='text-justify font-pFonts px-20'>Featuring a variety of projects, my portfolio highlights my abilities in Strategic Planning, Team Leadership, and Digital Marketing as a Computer Science student. Each project is a unique mix of creativity and practicality, showing my dedication and passion. Come explore to learn more!</p>
                <Carousel responsive={responsive} swipeable={true} autoPlaySpeed={80000} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={responsive.deviceType !== "mobile" ? true : false}>
                {
  projectsdata.map(({src,title,des,type, buttonlink}) => {
    return(
        <div className="mr-3">
          <div className="w-full xl:px-5 h-[400px] xl:py-5 rounded-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-t mb-3 hover:from-gray-900 hover:blue-900 transition-colors text-white duration-1000">
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
                src={src}
                alt="Finger Tips Enterprise"
              />
            </div>
            <div className="w-full flex flex-col gap-10">
              <div>
                <div className="items-center">
                  <h3 className="text-base pt-3 uppercase text-[#4CC790] text-3xl font-headerFont">
                    {title}
                  </h3>
                </div>
                <div style={{height: "150px", overflow: "auto"}} className='font-pFonts text-justify'>
                  <p className="text-sm tracking-wide mt-3 hover:text-white-800 duration-300" style={{overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none"}}>
                    {des}
                  </p>
                  <a href={`${buttonlink}`}>
    <button className='bg-[#4CC790] rounded p-2'> {type === "website" ? "View My Work" : "Watch My Videos"}</button>
</a>
                </div>
              </div>
            </div>
          </div> 
        </div>
      )})
}

                </Carousel>
            </div>
            <div className='pt-5'>

            </div>

        </section>
    );
}

export default Projects