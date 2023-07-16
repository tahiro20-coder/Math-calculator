import React from 'react'
import "../Styles/LearningPage.css"
import "../Styles/ContactPage.css"
import mml from "../Images/mml.jpg";
import C1 from "../Images/C1.png";
import C2 from "../Images/C2.png";
import C3 from "../Images/C3.png";
import C4 from "../Images/C4.png";
import C5 from "../Images/C5.png";
import C6 from "../Images/C6.png";
import C7 from "../Images/C7.png";
import Container from 'react-bootstrap/Container';
import mmlPDF from "../PDF/mml-book.pdf";
import C1PDF from "../PDF/Mathematics for ML Part I.pdf";
import C2PDF from "../PDF/Mathematics for ML Part II.pdf";
import C3PDF from "../PDF/Matrix Decomposition_3.pdf";
import C4PDF from "../PDF/Vector Calculus_2.pdf";
import C5PDF from "../PDF/Intro-Optimization.pdf";
import C6PDF from "../PDF/Optimization-Methods1.pdf";
import C7PDF from "../PDF/Optimization-Constrained.pdf";


const sources = [
  {
    title:"Linear Algebra",
    img:C1,
    link:C1PDF,
},
{
  title:"Analytic Geometry",
  img:C2,
  link:C2PDF,
},
{
  title:"Matrix Decomposition",
  img:C3,
  link:C3PDF,
},
{
  title:"Vector calculus",
  img:C4,
  link:C4PDF,
},
{
  title:"Optimization Preliminaries",
  img:C5,
  link:C5PDF,
},
{
  title:"Gradient Methods for unconstrained Optimization",
  img:C6,
  link:C6PDF,
},
{
  title:"Constrained Optimization",
  img:C7,
  link:C7PDF,
},
  {
      title:"Mathematics for Machine Learning",
      img:mml,
      link:mmlPDF,
  },
]
const render_sources = sources.map((source,index) =>{
  return (
      <div className='source' key={source.title}>
        <a 
        href={source.link}
        download={source.title}
        target="_blank"
        rel="noreferrer"
        >
        <img className='sourceimage' src={source.img} alt={source.title} />
        </a>
        
        <span className='sourcetitle'>
        {source.title}
        </span>
      </div>
  );
});

const LearningPage = () => {
  return (
    <div>
      <Container fluid="xxl" className='CPT'>
          <div className="CPTTitle">
            The Learning Center
            <hr className='lineSt'/>
          </div>
          <div className='CPTdesc'>
            Education Resources to make your work easier, the resources created by Dr Bouanane 
            which originally written from the book of Mathemathics for Machine Learning
          </div>
        </Container>

        <Container fluid="xl" className='ResourcesCont'>
          {render_sources}
        </Container>
    </div>
  )
}

export default LearningPage