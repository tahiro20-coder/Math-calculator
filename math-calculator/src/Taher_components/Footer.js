
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import '../Styles/Footer.css';



function Footer(){
    return(
        <div className="footer-container" >
            <div className="left">            
                <ul className="footer_list">
                    <li className="footer_item">
                        <Link to='/Home'className="footer_link">Home</Link>
                    </li>
                    <li className="footer_item">
                        <Link to='/About'className="footer_link">About</Link>
                    </li>
                    <li className="footer_item">
                        <Link to='/Contact'className="footer_link">Contact us</Link>
                    </li>
                </ul>
                <div className="copy-rights-container">
                    <p className="copy-rights">Copyrights (c) 2023. All rights reserved</p>
                </div>
            </div>
            <div className="right">
                <div className="first-pol"/>
                <div className="second-pol"/>
                <div className="third-pol"/>
                <div className="forth-pol"/>
            </div>
        </div>
    );
}

export default Footer;