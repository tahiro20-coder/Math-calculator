import univ_logo from './univ_logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'

import {Link , useMatch, useResolvedPath} from 'react-router-dom'



function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isactive = useMatch({path: resolvedPath.pathname, end: true})
  return(
    <Link to={to} {...props}>
      <Nav.Link  className={"active" && isactive  } href={to} >{children}</Nav.Link>
    </Link>
  );

}

function Header(){
    return(
    <>
    
      <Navbar bg="light" expand="md" bsPrefix='navbar'>
        <Container   fluid='sm'>
          <Navbar.Brand href="#home">
            <img src={univ_logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <CustomLink className = "link_page " to='/HomePage'>Home</CustomLink>
              <CustomLink className = "link_page " to='/CalcPage'>Math Calculator</CustomLink>
              <CustomLink className = "link_page " to='/AboutPage'>About</CustomLink>
              <CustomLink className = "link_page " to='/ContactPage'>Contact us</CustomLink>
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