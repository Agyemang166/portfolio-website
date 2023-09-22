import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills=()=>{
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

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2 className="text-white">Skills</h2>
                        <p>lorem Ipsum is simply a dummy text of a the printing and typesetting industry<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="skills-slider">
                            <div className="item">
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                    stroke-dasharray="96, 100"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">96%</text>
                                </svg>
                                <h5>Web Developement</h5>
                            </div>
                            <div className="item">
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                    stroke-dasharray="81, 100"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">81%</text>
                                </svg>
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                    stroke-dasharray="90, 100"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">90%</text>
                                </svg>
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                    stroke-dasharray="84, 100"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">84%</text>
                                </svg>
                                <h5>Mobile App Development</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>

                    
                </Row>

                <div className="skills">
                    <Row >
                        <Col xs={12} md={6} xl={5}>
                            <div class="progress-bar-container">
                                <h2>HTML: 75%</h2>
                                <div className="progress-bar">
                                    <span className="percentage html"></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <div className="progress-bar-container">
                                <h2>CSS: 65%</h2>
                                <div className="progress-bar">
                                    <span className="percentage css"></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <div className="progress-bar-container">
                                <h2>React Js: 53%</h2>
                                <div className="progress-bar">
                                    <span className="percentage reactjs"></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={7}>
                            <div className="progress-bar-container">
                                <h2>JavaScript: 55%</h2>
                                <div className="progress-bar">
                                    <span className="percentage javascript"></span>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </div>
            </Container>

        </section>
      )
}