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
import {CgShapeRhombus} from "react-icons/cg";
import { Avatar } from '@mui/material';


const objectives = ["To build a website for our own Linear algebra functions.",
                    "To apply the new knowledge that we learned.",
                    "Learn the new technologies of website developments.",
                    "Learn how to co-work."];

const render_objectives = objectives.map((objective,index)=>{
    return (
        <div className='row-xs d-flex  align-items-center' style={{ fontSize: '1.5rem', fontWeight:'300',padding:"0.5em",marginLeft:(2*(1+index%2)+"em")}} key={index}>
                {/* <CgShapeRhombus style={{color:"#CDC2AE"}}/> */}
                <div className="objshape"></div>
                {objective}

                
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
        <div className='infos-container'>
            <div className='container-xxl ' style={{marginBottom:"0.5em"}}>
                <div className='objective-title ' style={{
                    color:"#0B3841",
                    fontSize:"3rem",
                    fontWeight:'600',
                    marginBottom: "0.25em",
                }}>
                    <span >
                    The Aim from This Project:
                    </span>
                </div>
                {render_objectives}
            </div>
            <div className='team-container'>
                <div className='container-xxl'>
                    <div className='team-title text-center' style={{
                        color:"#0B3841",
                        fontSize:"3rem",
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