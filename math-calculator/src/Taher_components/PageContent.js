import {Route, Routes} from 'react-router-dom';

import HomePage from '../Pages/HomePage.js';
import AboutPage from '../Pages/AboutPage.js';
import CalcPage from '../Pages/CalcPage.js';
import ContactPage from '../Pages/ContactPage.js';
import Redirect from '../Pages/Redirect.jsx';

function PageContent(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/Calculator' element={<CalcPage/>}/>
            <Route path='/Calculator/:func' element={<CalcPage/>}/>
            <Route path='/About' element={<AboutPage/>}/>
            <Route path='/Contact' element={<ContactPage/>}/>
            <Route path='/*' element={<Redirect/>}/>
        </Routes>
    );
}

export default PageContent;