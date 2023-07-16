import {Route, Routes,useNavigate,Navigate  } from 'react-router-dom';
import HomePage from '../Pages/HomePage.js';
import AboutPage from '../Pages/AboutPage.jsx';
import CalcPage from '../Pages/CalcPage.jsx';
import ContactPage from '../Pages/ContactPage.js';
import RedirectPage from '../Pages/Redirect.jsx';
import LearningPage from "../Pages/LearningPage.jsx";
import React,{useEffect} from 'react'

function PageContent(){
    const navigate = useNavigate();
    return(
        <Routes>
            <Route path='/' element={<Navigate to="/Home" /> }/>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/Calculator' element={<CalcPage/>}/>
            <Route path='/Calculator/:func' element={<CalcPage/>}/>
            <Route path='/Learning' element={<LearningPage/>}/>
            <Route path='/About' element={<AboutPage/>}/>
            <Route path='/Contact' element={<ContactPage/>}/>
            <Route path='/*' element={<RedirectPage/>}/>
        </Routes>
    );
}
function Index() {
    const navigate = useNavigate();
  
    useEffect(() => {
      setTimeout(() => {
        // 👇 Redirects to about page, note the `replace: true`
        navigate('/Home', { replace: true });
      }, 1000);
    }, []);
  
    return <div style={{height:"100%"}}>Redirecting...</div>;
  }

export default PageContent;