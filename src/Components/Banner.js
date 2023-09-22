import {Container, Row, Col} from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';
import Cosmicimage from "../assets/img/cosmicimage.png";
import Austronaut from "../assets/img/autronaut.png";
import Fly from "../assets/img/fly.png";
import { useEffect, useState } from "react";


export const Banner =() => {
const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ " Web Developer", " Web Designer", " UI/UX Designer" ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    
    return(
        <section className="banner" id="home" >
            <Container>
                <Row className="justify-content-center align-items-center ">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My portfolio</span>
                    <h3>"Hi I'm Nana Gyamfi Agyemang"</h3>
                    <h1> <span className="wrap"></span>A {text}</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    <button onClick={() => console.log("connect")}>Let's connect <Icon.ArrowRightCircleFill size={28}/></button>
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