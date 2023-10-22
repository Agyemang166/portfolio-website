import React from 'react'
import "../Recommendation/Recommendation.css"
import { FaStar } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const recommendationData = [
    {
        employer:"Mr Ahenkora Richard",
        position:"CEO Of Mizpah Travel Agency",
        relationship:"Employer: Mr. Ahenkora, who hired me as a web developer for his business, Mizpah Travel Agency.",
        recommendationtext:"While serving as a website developer at Mizpah Travel Agency, he showcased outstanding strategic thinking by independently constructing the website. His time management skills ensured tasks were completed promptly and to an excellent standard. His flexibility and expertise in programming resulted in significant cost savings for our agency, making him an invaluable part of our team. I fully endorse Mr Gyamfi for all kinds of web development projects.",
        email:"mizpahtravel@gmail.com"
    },
    {
        employer:"Pastor Ahenkora Richard",
        position:"Pastor of Mizpah International Ministry",
        relationship:"Employer:I was hired by Mr. Ahenkora as a web developer for his church, Mizpah International Ministry.",
        recommendationtext:"As the leader of Mizpah International Ministry, I had the pleasure of working with Mr Gyamfi Agyemang on our website project. He single-handedly built and optimized our website, showcasing not only his impressive technical skills but also his deep-rooted Christian beliefs. The website is a testament to his ability to combine professional expertise with personal passion. His work resulted in significant savings for our ministry, and we couldn't be more pleased with the outcome. I wholeheartedly recommend Mr Gyamfi Agyemang for any web development project.",
        email:"mizpahtravel@gmail.com"
    },
]

function Recommendation() {
    const recommendationresponsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

  return (
    <div id='recommendation'>
        <div className="titleheader">
             <h1 className='font-titleFonts text-center text-6xl'>Endorsements & Accolades</h1>
      <p className='text-center font-pFonts'>Impressions & Impact: An Extensive, Detailed, and Comprehensive Showcase of My Professional Journey, Highlighted Through Endorsements and Accolades from Respected Peers, Leaders, and Influencers in the Field, Demonstrating My Skills, Achievements, and Contributions.</p>
        </div>
        
        <Carousel responsive={recommendationresponsive} swipeable={true} infinite={true} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style">
      
        {
            recommendationData.map(({employer, position,relationship,recommendationtext,email}) => {
                return(
         <div className="recommenders text-center pt-5 bg-[#d9f4e8] m-3 rounded-lg">
  <p className='text-lg font-semibold text-blue-600'>{employer}</p>
  <p className='text-sm font-light text-gray-500'>{position}</p>
  <p className='text-sm text-gray-700'>{relationship}</p>
  <p className='text-dark text-justify p-3'>"{recommendationtext}"</p>
  <div className="d-flex justify-content-center mt-4">
    <FaStar color="goldenrod" size="2em" />
    <FaStar color="goldenrod" size="2em" />
    <FaStar color="goldenrod" size="2em" />
    <FaStar color="goldenrod" size="2em" />
    <FaStar color="goldenrod" size="2em" />
  </div>
  <button type="button" className="btn btn-primary mt-3">
  <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Send me a Mail</a>
</button>
</div>                   
                )
            })
        }


    </Carousel>
    </div>
   
  )
}

export default Recommendation
