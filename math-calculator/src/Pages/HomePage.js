import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";
import intro_img from "../Images/intro_img.png";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";

import {Link} from 'react-router-dom'


const courses_titles = ["Learn Linear algebra Basics",
                        "Geometry Algebra",
                        "Matrix Factorization Vector Calculas",
                        "Constrained and unconstrained Optimization"];

const render_course_titles = courses_titles.map((title,index) => {
    return (
        
        <div key={index+3} className='course-container'>
            <BsArrowRight/>
            <div key={index} className='course'>
                <span>{title}</span>
            </div>
        </div>
    );
    });



function HomePage(){

    
    return(
        <>
        <Container fluid="xxl" className='con-intro'>
            <div className='intro-container'>
                <div className='intro-text-container'>
                    <div className='intro-title'>
                        <span>Linear Algebra</span>
                    </div>
                    <div className='intro-content'>
                        <span>A Designed Calculator for solving multiple linear algebra problems, where the solutions are shown step by step.</span>
                    </div>
                    
                    <div className='intro-btn-container'>
                        <Link to='/CalcPage'className="btn-link" >
                            <span className='btn-text'>
                                <span>Calculate Now</span>
                            </span>
                            <HiOutlineArrowRightCircle className='icone'/>
                        </Link>
                    </div>
                </div>
                <div className='intro-img'>
                    <img src={intro_img} alt="logo" />
                </div>
            </div>
        </Container>
        <Container fluid="xxl" className='con-main'>
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
        </Container>
        
        </>
    );
}

export default HomePage