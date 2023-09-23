import {Container, Row, Col} from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';
import Cosmicimage from "../assets/img/cosmicimage.png";
import Austronaut from "../assets/img/autronaut.png";



export const Banner =() => {

    return(
        <section className="banner" id="home" >
            <Container>
                <Row className="justify-content-center align-items-center ">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My portfolio</span>
                    <h3 className="name">Hi, I'm Nana Gyamfi Agyemang</h3>
                    <h1 className="d-flex "> <span className="changecontent wrap"></span></h1>
                    <p>"Hello, I am Agyemang Nana Gyamfi, an industrious scholar of Computer Science at KNUST, with a specialization in React development. My fervor for technology, coupled with my adept problem-solving abilities, distinguishes me in my field. My solid understanding of coding principles and propensity for crafting user-centric applications make me a formidable contender for any technological challenge!"</p>
                     <a href="#"><button>Let's connect <Icon.ArrowRightCircleFill size={28}/></button></a>
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