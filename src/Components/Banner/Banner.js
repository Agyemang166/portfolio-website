import {Container, Row, Col} from "react-bootstrap"
import { Typewriter } from 'react-simple-typewriter'

import "../Banner/Banner.css"
import * as Icon from 'react-bootstrap-icons';
import Cosmicimage from "../Images/cosmicimage.png"
import Austronaut from "../Images/autronaut.png";



export const Banner =() => {

    return(
        <section className="banner text-dark" id="home" >
            <Container>
                <Row className="justify-content-center align-items-center ">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline ">Enter the vibrant realm of</span>
                    <h2 className=" font-titleFonts text-white text-4xl"> Nana Gyamfi Agyemang</h2>
                    <h1 style={{  fontWeight: 'normal' }}>
 <span> a{' '}</span>
        <span style={{ color: '#4CC790', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Frontend Developer', ' Computer Scientist', ' Mobile App Developer']}
            loop={50000}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={20}
            delaySpeed={1000}
          />
        </span>
      </h1>
                    <p className="text-justify font-pFonts">"Hello, I am Agyemang Nana Gyamfi, an industrious scholar of General science at Opoku Ware School, with a specialization in React development. My fervor for technology, coupled with my adept problem-solving abilities, distinguishes me in my field. My solid understanding of coding principles and propensity for crafting user-centric applications make me a formidable contender for any technological challenge!"</p>
                     <a href="https://wa.me/233542353326"><button>Let's connect <Icon.ArrowRightCircleFill size={28}/></button></a>
                    </Col>
                    <Col xs={12} md={3} xl={3} >
                      <div className="first">
                        <img src={Cosmicimage}  alt="Header Img"/>
                      </div>
                    </Col>
                    <Col xs={12} md={2} xl={3} className="second ">
                        <img src={Austronaut} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}