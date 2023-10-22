import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typewriter } from 'react-simple-typewriter'
import Card from "./Card";

import Projects from "./Projects/Projects";
import Recommendation from "./Recommendation/Recommendation";

import { AiFillAppstore } from "react-icons/ai";
import { FaUserTie, FaSwimmer, FaLightbulb, FaGlobe, FaClock, FaBusinessTime } from "react-icons/fa";

const progressSkills = [
    {
        skillName: "HTML : 91%",
        skillclassName: "percentage html",
        id: 1
    },
    {
        skillName: "CSS : 88%",
        skillclassName: "percentage css",
        id: 2
    },
    {
        skillName: "React Js : 83%",
        skillclassName: "percentage reactjs",
        id: 2
    },
    {
        skillName: "React Native : 85%",
        skillclassName: "percentage react-native",
        id: 2
    },
    {
        skillName: "Filmora Editor : 85%",
        skillclassName: "percentage react-native",
        id: 2
    },
    {
        skillName: "Javascript : 75%",
        skillclassName: "percentage javascript",
        id: 2
    },
]

const circulSkills = [
    {
        id: 1,
        strokedasharray: "96, 100",
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        percentage: "96%",
        title: "Web Development"
    },
    {
        id: 2,
        strokedasharray: "81, 100",
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        percentage: "81%",
        title: "Brand Identity"
    },
    {
        id: 2,
        strokedasharray: "40, 100",
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        percentage: "40%",
        title: "Cyber Security"
    },
    {
        id: 7,
        strokedasharray: "70, 100",
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        percentage: "70%",
        title: "Video Editting"
    },
    {
        id: 2,
        strokedasharray: "88, 100",
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        percentage: "88%",
        title: "SEO Optimization"
    },
    {
        id: 3,
        strokedasharray: "90, 100",
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        percentage: "90%",
        title: "Logo Design"
    },
    {
        id: 5,
        strokedasharray: "70, 100",
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        percentage: "70%",
        title: "UI/UX Design"
    },
    {
        id: 4,
        strokedasharray: "84, 100",
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        percentage: "84%",
        title: "Mobile App Development"
    },
]

const featuresData = [
    {
        id: 1,
        icon: <FaBusinessTime />,
        title: "Business Stratagy",
        des: "My analytical skills and creative approach allow me to develop effective strategies. I'm always eager to learn and grow, making me an ideal candidate for scholarships and opportunities designed for ambitious individuals.",
    },
    {
        id: 2,
        icon: <FaSwimmer />,
        title: "Swimming",
        des: "Swimming, a significant part of my life, has taught me perseverance and resilience. It's more than a hobby, it's a discipline that's helped me set and achieve goals, improved my fitness, and provided stress relief. Competing in events has imparted valuable lessons on sportsmanship and dedication.",
    },
    {
        id: 3,
        icon: <FaClock />,
        title: "time Consciousness",
        des: "Reliability is my middle name! I'm deeply committed to time management, consistently meeting deadlines and efficiently managing tasks. This discipline translates into my academic endeavors, ensuring I balance scholarship responsibilities with excellence.",
    },
    {
        id: 4,
        icon: <FaUserTie />,
        title: "Leadership",
        des: "I've always found myself in roles where I naturally guide and motivate others. This knack for leadership, paired with my ability to make clear, confident decisions, has served me well in all my endeavors. I'm excited to bring this energy to any team or project I'm part of.",
    },
    {
        id: 5,
        icon: <FaLightbulb />,
        title: "Problem Solving",
        des: "Problem-solving is my forte. I see every challenge as a puzzle and I enjoy finding the right pieces to complete the picture. I approach issues methodically, breaking them down and tackling each part until I find the best solution.",
    },
    {
        id: 6,
        icon: <AiFillAppstore />,
        title: "Hosting Websites",
        des: "Hosting websites is more than just putting content online for me. It's a craft, a blend of technical skills and creativity. I ensure every website I host is optimized for speed, security, and scalability. I strive to provide seamless user experiences, making sure every visitor's journey is smooth and enjoyable. This hands-on experience has honed my problem-solving skills and deepened my understanding of the digital world, preparing me for the challenges and opportunities that studying abroad will bring.",
    },
    {
        id: 6,
        icon: <FaGlobe />,
        title: "Project Management",
        des: "Project management is my forte in the world of computer science. I thrive in the fast-paced, dynamic environment of sprints, mastering version control with Git, and navigating through the challenges of late-night debugging sessions. My ability to coordinate teams, manage resources, and oversee the successful completion of projects is a testament to my dedication and passion for this field. I believe that a good project isn't just about code, it's about teamwork and the journey we take to turn ideas into reality.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
];

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1 className="text-white font-titleFonts text-6xl pb-4">Skills</h1>
                            <p className="font-pFonts">"Highlighting My Skills on My Portfolio Website"
                                <br></br></p>
                            <Typewriter
                                words={['Industry Knowledge', 'Specialized Expertise']}
                                loop={50000} cursor cursorStyle='|' typeSpeed={100} deleteSpeed={20} delaySpeed={3000} />
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                {
                                    circulSkills.map(({ id, strokedasharray, d, percentage, title }) => {
                                        return (
                                            <div className="item">
                                                <svg viewBox="0 0 36 36" class="circular-chart">
                                                    <path class="circle"
                                                        stroke-dasharray={strokedasharray}
                                                        d={d}
                                                    />
                                                    <text x="18" y="20.35" class="percentage">{percentage}</text>
                                                </svg>
                                                <h5 className="font-pFonts">{title}</h5>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                
                <div className="skills">
                    <Row >
                        <p className="text-center text-white pb-0">
                            <Typewriter
                                words={['Core Competencies', 'Technical Proficiencies']}
                                loop={50000} cursor cursorStyle='|' typeSpeed={100} deleteSpeed={20} delaySpeed={3000} />
                        </p>

                        {
                            progressSkills.map(({ id, skillclassName, skillName }) => {
                                return (
                                    <Col xs={12} md={6} xl={5}>
                                        <div class="progress-bar-container">
                                            <h2 className="font-pFonts text-2xl">{skillName}</h2>
                                            <div className="progress-bar">
                                                <span className={`${skillclassName}`}></span>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>

                </div>
                <div className="w-full py-10 p-3 border-[5px] border-bodyColor bg-[#223222] ">
                    <h2 className="font-pFonts text-center p-3">Personal Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                        {featuresData.map((item) => (
                            <Card item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </Container>

            <Projects/>
            <Recommendation/>
        </section>
    )
}