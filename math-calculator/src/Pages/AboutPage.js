import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutPage.css";
import team_img from "../Images/team_img.png";
import {CgShapeRhombus} from "react-icons/cg";



const objectives = ["To build a website for our own Linear algebra functions.",
                    "To apply the new knowledgethat we learned.",
                    "Learn the new technologies of website developments.",
                    "Learn how to co-work."];

const render_objectives = objectives.map((objective,index)=>{
    return (
        <div className='row-xs justify-content-between align-items-center' style={{ fontSize: '1.5rem', fontWeight:'300',padding:"0.5em"}} key={index}>
                <CgShapeRhombus style={{color:"#CDC2AE"}}/>{objective}
        </div>
    );
});

const project_members = [
    {
        name:'Sellami mohammed abdelhadi',
        role:'Fullstack developer',
    },
    {
        name:'Rezzag bedida taher',
        role:'Frontend developer',
    },
    {
        name: 'Hammouya abdeldjalil',
        role:'Backend developer',
    },
    {
        name:'Soualah mohammed',
        role:'Frontend developer',
    },
    {
        name:'Addoune salah',
        role:'Fullstack developer',
    },
    {
        name:'Babahammo mohammed',
        role:'Frontend developer',
    },
    {
        name:'Ouahbi mohammed',
        role:'Fullstack developer',
    },
    {
        name:'Hamzi oussama',
        role:'Fullstack developer',
    }

]

const render_project_members = project_members.map((member,index) =>{
    return (
        <div className='row-xxl align-items-center justify-content-center' style={{  fontWeight:'300',padding:"0.5em"}} key={index}>
                <div>
                    <span style={{fontSize:'1.2rem'}}>
                        {member.name}
                    </span>
                </div>
                <div>
                    <span style={{fontSize:'0.8rem'}}>
                        {member.role}
                    </span>
                </div>
                    
                
        </div>
    );
});



function AboutPage(){
    return(
        <>
        
        <Container fluid="xxl" className='con-intro'>
        <div className='intro-container'>
            <div className='intro-text-container'>
                <div className='intro-content' style={{fontSize:"1.8rem",padding:"1em"}}>
                    <span>
                        This website was created by 
                        group of student from University 
                        of Kasdi Merbah Ouargla.
                    </span>
                </div>
            </div>
            <div className='intro-img'>
                <img src={team_img} alt="logo" />
            </div>
        </div>
        <div className='infos-container'>
            <div className='container-xxl'>
                <div className='objective-title' style={{
                    color:"#0B3841",
                    fontSize:"3rem",
                    fontWeight:'600'
                }}>
                    <span>
                    The Aim from This Project:
                    </span>
                </div>
                {render_objectives}
            </div>
            <div className='team-container'>
                <div className='container-xxl'>
                    <div className='team-title' style={{
                        color:"#0B3841",
                        fontSize:"3rem",
                        fontWeight:'600'
                    }}>
                        <span>
                        The Project Team Members:
                        </span>
                    </div>
                </div>
                <div className='row-xs justify-content-between align-items-center' style={{ fontSize: '1.5rem', fontWeight:'300',padding:"0.5em"}}>
                    
                        {render_project_members}
                    
                </div>
            </div>
        </div>
        </Container>
        </>
    );
}

export default AboutPage