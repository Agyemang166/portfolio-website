import React from 'react'
import "../Projects/Projects.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// skills images
import FrontendDevelopment from "../Images/frontenddevelopment.png"
import MizpahFamily from "../Images/Mizpahfamily.png"
import TravelAgency from "../Images/travelagency.png"
import VideoImage1 from "../Images/video1.png"
import VideoImage2 from "../Images/video2.png"
import LittleLemon from "../Images/LittleLemon.jpeg"
import MovieSite from "../Images/moviesite.png"

// certificate images
import Cert1 from "../Images/courseracert1.png"
import Cert2 from "../Images/courseracert2.png"
import Cert3 from "../Images/courseracert3.png"

// certificate data
const certificateData = [
    {
        src: Cert1,
        title: "React Native",
        des: "Recently, I completed a comprehensive course on React Native on Coursera, sponsored by Meta. This course provided me with a deep dive into the world of mobile app development, specifically focusing on the use of React Native. Through this course, I gained a solid understanding of how to create dynamic, responsive, and user-friendly mobile applications using one of the most popular frameworks in the industry today. This certificate not only validates my technical skills but also showcases my commitment to continuous learning and professional growth in the field of mobile app development.",
        buttonlink: "https://www.coursera.org/account/accomplishments/certificate/4FLSKRQYY5JF"
    },
    {
        src: Cert2,
        title: "Programming with JavaScript",
        des: "Completing the JavaScript course on Coursera was an enriching experience that significantly enhanced my programming skills. The course provided me with a solid foundation in JavaScript, one of the core languages of web development. It allowed me to understand and implement key concepts such as asynchronous programming, DOM manipulation, and event handling. This accomplishment not only fortifies my coding abilities but also underscores my dedication to mastering the art of web development.",
        buttonlink: "https://www.coursera.org/account/accomplishments/certificate/4P8RQK2V5Z6Z"
    },
    {
        src: Cert3,
        title: "Introduction to front-end Development",
        des: "Successfully completing an Introduction to Front-End Development course has been a pivotal point in my journey as a web developer. This course provided me with a comprehensive understanding of the fundamental concepts of front-end web development, including HTML, CSS, and JavaScript. It has equipped me with the skills to create visually appealing, responsive, and user-friendly websites. This accomplishment is a testament to my dedication to continually expanding my knowledge and skills in the ever-evolving field of web development",
        buttonlink: "https://www.coursera.org/account/accomplishments/certificate/8S47XTZCKAFJ"
    },
   
]
// projects data
const projectsdata = [
    {
        type: "website",
        src: MizpahFamily,
        title: "MIZPAH INTERATIONAL MINISTRY",
        des: "Check out my work on the Mizpah International Ministry project. I used React to build a dynamic and user-friendly website, showcasing my proficiency in modern web development practices. Being based in Ohio, I've managed to transform the ministry's online presence, reflecting my skills in Strategic Planning, Team Leadership, and Digital Marketing. Dive in to see the impact of my work!",
        buttonlink: "https://mizpahfamily.com"
    },
    {
        type: "website",
        src: MovieSite,
        title: "Rai'na Movies",
        des: "Rai'na Movies is a website I've developed to showcase my skills in React. It serves as a platform for me to demonstrate my enthusiasm for learning React and integrating APIs to enhance the website's functionality. Through this project, I aim to exhibit my dedication to mastering React and creating immersive web experiences. I've invested considerable effort into crafting a visually appealing and user-friendly interface for Rai'na Movies, reflecting my passion for web development and my commitment to honing my skills in React. ",
        buttonlink: "https://movie-app-sand-kappa.vercel.app/"
    },
    {
        type: "website",
        src: TravelAgency,
        title: "MIZPAH TRAVEL AGENCY",
        des: "I single-handedly developed and deployed a project, optimizing it for peak performance. My skills in HTML and CSS came to the fore when I constructed a website for Mizpah Travel Agency, enhancing their online presence. Furthermore, I managed their email marketing, boosting engagement across all their platforms.",
        buttonlink: "https://mizpah-travel-agency.com"
    },
    {
        type: "mobile application",
        src: LittleLemon,
        title: "Little Lemon App",
        des: "I recently completed a React Native course and put my newfound skills to the test by developing a mobile app named 'Little Lemon'. This project, which I developed and deployed on my own, allowed me to showcase my ability to optimize for peak performance.",
        buttonlink: "https://www.tiktok.com/@gyamfinanaagyeman/video/7292520112974892293"
    },
    {
        type: "website",
        src: FrontendDevelopment,
        title: "BECOME A FRONTEND DEVELOPER",
        des: "In the initial stages of my web development journey, I created this website using only HTML, CSS, and vanilla JavaScript. While it may not be perfect, it shows significant progress within just my first month of programming. This project stands as a testament to my rapid learning and adaptability.",
        buttonlink: "https://app-sigma-seven.vercel.app/"
    },
    {
        type: "video",
        src: VideoImage1,
        title: "Video Editting 1",
        des: "This is a video I meticulously edited for Mizpah Travel Agency. This project allowed me to demonstrate my ability to tell a compelling story through video, showcasing the agency's services in a dynamic and engaging way. With careful attention to detail, I was able to highlight the unique aspects of their business, resulting in a video that not only informs but also entertains. This project truly reflects my skills in video editing and my commitment to delivering high-quality results.",
        buttonlink: "https://www.tiktok.com/@mizpah_travel2023/video/7285322572856659242"
    },
    {
        type: "video",
        src: VideoImage2,
        title: "Video Editting 2",
        des: "Another notable project in my Hall of Fame is a second video I edited for Mizpah Travel Agency. This project further showcases my video editing skills, as I was tasked with creating a different narrative that highlights another aspect of their services. Through innovative editing techniques, I was able to craft a video that captures the viewer's attention and effectively communicates the agency's message. This second video stands as another testament to my versatility and creativity in video editing.",
        buttonlink: "https://www.tiktok.com/@mizpah_travel2023"
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
                <p className='text-center font-pFonts px-15'>My portfolio, enriched by a diverse range of projects, showcases my skills in Strategic Planning, Team Leadership, and Digital Marketing as a Computer Science student. Each project, backed by certificates, reflects a unique blend of creativity and practical application, demonstrating my commitment and enthusiasm. Dive in to discover more!</p>
                <h3 className='text-center pb-0 mb-0 mt-5 font-pFonts'>Projects</h3>
                <Carousel responsive={responsive} swipeable={true} autoPlaySpeed={80000} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={responsive.deviceType !== "mobile" ? true : false} dotListClass="custom-dot-list-style">
                    {  
                        projectsdata.map(({ src, title, des, type, buttonlink }) => {
                            return (
                                <div className="mr-3 mt-5">
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
                                                    <h3 className="text-base pt-3 uppercase text-[#4CC790] text-3xl font-h1Fonts">
                                                        {title}
                                                    </h3>
                                                </div>
                                                <div style={{ height: "150px", overflow: "auto" }} className='font-pFonts text-justify'>
                                                    <p className="text-sm tracking-wide mt-3 hover:text-white-800 duration-300 p-3" style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}>
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
                            )
                        })
                    }

                </Carousel>

                <h3 className='text-center pb-0 mb-0 mt-5 font-pFonts'>Certificates</h3>

                <Carousel responsive={responsive} swipeable={true} autoPlaySpeed={10000} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={responsive.deviceType !== "mobile" ? true : false} dotListClass="custom-dot-list-style">
                    {
                        certificateData.map(({ src, title, des, buttonlink }) => {
                            return (
                                <div className="mr-3 mt-5 m-3">
                                    <div className="w-full xl:px-5 h-[400px] xl:py-5 rounded-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-t mb-3 hover:from-gray-900 hover:blue-900 transition-colors text-white duration-1000">
                                        <div className="w-full h-[200px] overflow-hidden rounded-lg">
                                            <img
                                                className="w-full h-full p-2 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                                                src={src}
                                                alt="Finger Tips Enterprise"
                                            />
                                        </div>
                                        <div className="w-full flex flex-col gap-10">
                                            <div>
                                                <div className="items-center">
                                                    <h3 className="text-base pt-3 uppercase text-[#4CC790] text-3xl font-h1Fonts">
                                                        {title}
                                                    </h3>
                                                </div>
                                                <div style={{ height: "150px", overflow: "auto" }} className='font-pFonts text-justify'>
                                                    <p className="text-sm tracking-wide mt-3 hover:text-white-800 duration-300 p-3" style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}>
                                                        {des}
                                                    </p>
                                                    <a href={`${buttonlink}`}>
                                                        <button className='bg-[#4CC790] rounded p-2'>View My Certificate</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Carousel>
                <p className='text-center font-h1Fonts'>These accomplishments not only highlights my technical skills but also demonstrates my initiative, dedication, and ability to independently manage a project from conception to completion.In addition to these accomplishments, I've also earned several certificates, further solidifying my technical skills. It's a testament to my adaptability and eagerness to continuously learn and grow.</p>
            </div>
            <div className='pt-5'>

            </div>

        </section>
    );
}

export default Projects