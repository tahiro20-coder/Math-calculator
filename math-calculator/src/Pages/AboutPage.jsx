import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutPage.css";
import team_img from "../Images/team_img.png";
import Sellami from "../Images/Sellami.jpg";
import Taher from "../Images/Taher.jpg";
import DJ from "../Images/DJ.jpg";
import SH from "../Images/SH.jpg";
import Salah from "../Images/Salah.jpg";
import BBH from "../Images/BBH.jpg";
import Islam from "../Images/Islam.jpg";
import Seif from "../Images/Seif.jpg";
import BN from "../Images/BN.jpg";
import ML from "../Images/ML.jpg";
import {CgShapeRhombus} from "react-icons/cg";
import { Avatar } from '@mui/material';

const objectives_tl = ["Save our Functions",
                    "apply the knowledge",
                    "Learn new technologies ",
                    "co-working"];

const objectives = ["Preserving the linear algebra functions that we have created in order to create a general stimulus by not ignoring the tasks performed, despite their smallness.",
                    "Employing the knowledge that we have studied in the past years, which will allow us to develop and not lose previous knowledge.",
                    "Learn the new technology used in making websites to develop and improve our skills.",
                    "Making complete work done in a team allows us to learn to collaborate and organize Different tasks within different team members."];

const render_objectives = objectives.map((objective,index)=>{
    return (
        // <div className='row-xs d-flex  align-items-center' style={{ fontSize: '1.5rem', fontWeight:'300',padding:"0.5em",marginLeft:(2*(1+index%2)+"em")}} key={index}>
        <div className='d-flex flex-column  align-items-center objcont '  key={index}>
                {/* <CgShapeRhombus style={{color:"#CDC2AE"}}/> */}
                {/* <div className="objshape"></div> */}
                <span className='objtitle'>
                {objectives_tl[index]}
                </span>
                <span className='objdesc'>
                {objective}
                </span>

                
        </div>
    );
});

const project_members = [
    {
        name:'Sellami mohammed abdelhadi',
        role:'Fullstack developer',
        img:Sellami,
        fb_link:'https://www.facebook.com/profile.php?id=100012502147526',
    },
    {
        name:'Rezzag bedida taher',
        role:'Frontend developer',
        img:Taher,
        fb_link:"https://www.facebook.com/gtaher.rezza",

    },
    {
        name: 'Hammouya abdeldjalil',
        role:'Backend developer',
        img:DJ,
        fb_link:"https://www.facebook.com/anis.topjalil",
    },
    {
        name:'Soualah mohammed',
        role:'Frontend developer',
        img:SH,
        fb_link:"https://www.facebook.com/profile.php?id=100015850683876"
    },
    {
        name:'Hamzi oussama',
        role:'Fullstack developer',
        img:Seif,
        fb_link:"https://www.facebook.com/seyf1elislam",
    },
    {
        name:'Addoune salah',
        role:'Fullstack developer',
        img:Salah,
        fb_link:"https://www.facebook.com/sallah.psg.1"
    },
    {
        name:'Babahammo mohammed',
        role:'Frontend developer',
        img:BBH,
        fb_link:"https://www.facebook.com/profile.php?id=100008149273562"
    },
    {
        name:'Ouahbi mohammed',
        role:'Fullstack developer',
        img:Islam,
        fb_link:"https://www.facebook.com/mohamedislam.ouahbi.1",
    },
    {
        name:'Mohammed Lamine',
        role:'Frontend developer',
        img:BN,
        fb_link:"https://www.facebook.com/mohamed.habireh",
    },
    {
        name:"Mohammed Amine",
        role:"Quality Assurance Tester",
        img:ML,
        fb_link:"https://www.facebook.com/100038859726527/",
    }

]

const render_project_members = project_members.map((member,index) =>{
    return (
        <div className='row-xxl d-flex flex-column align-items-center justify-content-center mmbcont' style={{  fontWeight:'300',padding:"0.5em"}} key={index}>
                <a href={member.fb_link} target="_blank">
                <Avatar
                    alt={member.name}
                    src={member.img}
                    sx={{ width: 126, height: 126 }}
                />
                </a>
                    <span style={{fontSize:'1.2rem',textAlign:"center",marginTop:"10px",fontWeight:"400",}}>
                        {member.name}
                    </span>
                    <span style={{fontSize:'0.8rem',textAlign:"center",marginTop:"10px",marginBottom:"25px"}}>
                        {member.role}
                    </span>
                    
                
        </div>
    );
});



function AboutPage(){
    return(
        <>
        
        <Container fluid="xxl" className='con-intro'>
        <div className='intro-container'>
            <div className='intro-text-container'>
                <div className="intro-title-A" style={{
                        color:"#0B3841",
                    }}>
                    About Us
                </div>
                <div className='intro-content' style={{fontSize:"1.8rem",padding:"1em"}}>
                    <span>
                        This website was created by 
                        a group of student from University 
                        of Kasdi Merbah Ouargla.
                    </span>
                </div>
            </div>
            <div className='intro-img'>
                <img src={team_img} alt="logo" />
            </div>
        </div>

        <Container fluid="xl" className='con-main' style={{
     
                        marginBottom: "5em",
                        
                    }}>

                <div className='main-container'>

                    <div className='main-content w-100'>
                    <div className='objective-title ' style={{
                        color:"#0B3841",
                        fontSize:"2.25rem",
                        fontWeight:'600',
                        marginBottom: "1em",
                        
                    }}>
                        <span >
                        The Aim from This Project:
                        </span>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between w-100' >
                    {render_objectives}
                    </div>
                    
                    </div>

                </div>
            </Container>

        <Container fluid="xl" className='abholder'>
            <div className="abcont d-flex flex-column align-items-center justify-content-center">
                <div className='abtitle'>
                Who Are <span style={{color: "#D9383C"}}>We</span>
                </div>
                <div className='abdesc'>
                Welcome to our AI and Data Science Master's Student Group! We are a passionate group of 
                students pursuing our Master's degrees in the exciting fields of Artificial Intelligence
                 and Data Science. With a collective goal of pushing the boundaries of knowledge and leveraging
                  the power of technology, we have come together to create innovative solutions and contribute 
                  to the ever-evolving world of AI .

                </div>
            </div>
            
            <div className="abcont d-flex flex-column align-items-center justify-content-center">
                <div className='abtitle'>
                <span style={{color: "#D9383C"}}>About</span> the team
                </div>
                <div className='abdesc'>
                As a team, we bring a diverse range of skills and experiences to the table.
                 Each member of our group specializes in various areas of AI and data science, 
                 including machine learning, deep learning, natural language processing, computer vision, 
                 and data analysis. Through our studies and practical projects, 
                we have gained valuable expertise in applying these techniques to real-world challenges.

                </div>
            </div>

            <div className="abcont d-flex flex-column align-items-center justify-content-center" >
                <div className='abtitle'>
                What is our <span style={{color: "#D9383C"}}>ambition</span>
                </div>
                <div className='abdesc'>
                Our website reflects our passion for AI and data science, as well as 
                our commitment to sharing knowledge and creating practical tools for 
                fellow students, professionals, and enthusiasts. We have combined our skills 
                in web development to create an intuitive and interactive platform where 
                users can explore, learn, and apply concepts in AI and data science and linear algebra.
                <br/> <br/>
                </div> 
            </div>

            <div className="abcont d-flex flex-column align-items-center justify-content-center">
                <div className='abtitle'>
                <span style={{color: "#D9383C"}}>share</span> your knowledge
                </div>
                <div className='abdesc'>
                Furthermore, we are dedicated to fostering a collaborative and supportive community of learners. 
                We encourage active engagement, questions, and discussions, and we are always excited to connect
                 with like-minded individuals who share our passion for AI and data science. Together, we can build
                  a strong network, 
                exchange ideas, and inspire each other on this fascinating journey.
                
                </div>
            </div>

        </Container>

        <Container fluid="xl" style={{marginBottom:"5rem"}}>
        <div className="abcont d-flex flex-column align-items-center justify-content-center">
                <div className='abtitle' style={{textAlign:"center"}}>
                <span style={{color: "#D9383C"}}>Thank you</span>
                </div>
                <div className='abdesc' style={{textAlign:"center"}}>
                Thank you for visiting our website and being a part of our community. 
                We are thrilled to have the opportunity to share our knowledge, learn from one another, 
                and contribute to the growth and advancement of linear algebra.
                </div>
            </div>
        </Container>

        <div className='infos-container'>
           
            <div className='team-container'>
                <div className='container-xxl'>
                    <div className='team-title text-center' style={{
                        color:"#0B3841",
                        fontSize:"2.5rem",
                        fontWeight:'600',
                        marginTop: "0.25em",
                        marginBottom: "0.5em",
                        textAlign: "center",
                    }}>
                        <span>
                        The Project Team Members:
                        </span>
                    </div>
                </div>
                <div className='row-xs d-flex flex-wrap justify-content-between align-items-center' style={{ fontSize: '1.5rem', fontWeight:'300',padding:"0.5em"}}>
                    
                        {render_project_members}
                    
                </div>
            </div>
        </div>
        </Container>
        </>
    );
}

export default AboutPage