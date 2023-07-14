import univ_logo from '../Images/univ_logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/Header.css';
import {Link , useMatch, useResolvedPath} from 'react-router-dom'



function CustomLink({to, children, ...props}){
  const url = window.location.pathname;
  const resolvedPath = useResolvedPath(to)
  const isactive = useMatch({path: resolvedPath.pathname, end: true})
  console.log(to,url.includes(to)?"active":"")
  console.log(isactive)
  return(
    <Link to={to} {...props}>
      {/* ("active" && isactive )+  */}
      <Nav  className={url.includes(to)?"active":"inactive" } href={to} >{children}</Nav>
    </Link>
  );

}

function Header(){
    return(
    <>
      <Navbar bg="light" expand="md" bsPrefix='navbar'>
        <Container   fluid='sm'>
          <Navbar.Brand href="/#/Home">
            <img className="logo" src={univ_logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <CustomLink className = "link_page" to='/Home'>Home</CustomLink>
              <CustomLink className = "link_page" to='/Calculator' >Math Calculator</CustomLink>
              <CustomLink className = "link_page" to='/About'>About</CustomLink>
              <CustomLink className = "link_page " to='/Contact'>Contact us</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className='shape'>
            <div className='shape_rec first'></div>
            <div className='shape_rec second'></div>
            <div className='shape_rec third'></div>
        </div>
      </Navbar>
      
      
    
    </>
    );

}

export default Header;