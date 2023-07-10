import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";
import intro_img from "../Images/intro_img.png";
// import { BsArrowRight } from "react-icons/bs";


import { Link } from 'react-router-dom'
import React from 'react';


// const courses_titles = ["Learn Linear algebra Basics",
//     "Geometry Algebra",
//     "Matrix Factorization Vector Calculas",
//     "Constrained and unconstrained Optimization"];

// const render_course_titles = courses_titles.map((title, index) => {
//     return (

//         <div key={index + 3} className='course-container'>
//             <BsArrowRight />
//             <div key={index} className='course'>
//                 <span>{title}</span>
//             </div>
//         </div>
//     );
// });



function HomePage() {


    return (
        <>
            <Container fluid="xl" className='con-intro'>
                <div className='intro-container'>
                    <div className='intro-text-container'>
                        <div className='intro-title'>
                            <span>Calculate your Linear Algebra</span>
                        </div>
                        <div className='intro-content'>

                            <span>Descover and calculate up to 50+ linear algebra problems, where the solutions are shown step by step.</span>
                        </div>

                        <div className='intro-btn-container'>
                            <Link to='/Calculator' className="btn-link" >
                                <span className='btn-text'>
                                    <span>Calculate now</span>
                                </span>
                                {/* // <HiOutlineArrowRightCircle className='icone'/> */}
                            </Link>
                        </div>
                    </div>
                    <div className='intro-img'>
                        <img src={intro_img} alt="logo" />
                    </div>
                </div>
            </Container>
            <Container fluid="xl" >
                <div className="sec-main">
                    <div className="sec-cont">
                        <span className='sec-nb'>
                            50+
                        </span>
                        <span className='sec-dc'>
                            Linear algebra problems
                        </span>
                    </div>
                    <div className="sec-cont">
                        <span className='sec-nb'>
                            5sec
                        </span>
                        <span className='sec-dc'>
                            Maximum in calculations
                        </span>
                    </div>
                    <div className="sec-desc">
                        <span className='sec-nc'>
                            Reachness and Fastness Calculations
                        </span>
                    </div>
                </div>
            </Container>

            <Container fluid="xl" className='con-main'>

                <div className='main-container'>

                    <div className='main-content'>
                        <div className="tr-desc">
                            <span className='tr-nc'>
                                Special Thanks
                            </span>
                        </div>
                        <span>
                            to all Doctors that help us to make this website
                            and give us the motivation to create it especially Dr Boanan,Where
                            The website functions was created and maintained by the courses
                            of Dr Boanan in these subjects:
                        </span>
                        <div className='courses'>
                            <div className='course-l'>
                            Linear Algebra
                            </div>
                            <div className='course-l'>
                            Geometry Algebra
                            </div>
                            <div className='course-l'>
                            Matrix Factorization
                            </div>
                            <div className='course-l'>
                            Vector Calculas
                            </div>
                            <div className='course-l'>
                            Constrained Optimization
                            </div>
                            <div className='course-l'>
                            unconstrained Optimization
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

            {/* <Container fluid="xl" className='con-main'>
                <div className="tr-desc">
                    <span className='tr-nc'>
                        Special Thanks
                    </span>
                </div>
                <div className='main-container'>
                    <div className='main-content'>
                        <span>
                            We would like to thanks all of our Doctors that help us to make this website
                            and give the motivation to create it especially Dr Boanan.
                            The website functions was created and maintained by the courses
                            of Dr Boanan in these subjects:
                        </span>
                    </div>
                    <div className='main-courses-container'>
                        {render_course_titles}
                    </div>
                </div>
            </Container> */}

        </>
    );
}

export default HomePage