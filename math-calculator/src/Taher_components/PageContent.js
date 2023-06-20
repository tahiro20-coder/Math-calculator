import {Route, Routes} from 'react-router-dom';

import HomePage from '../Pages/HomePage.js';
import AboutPage from '../Pages/AboutPage.js';
import CalcPage from '../Pages/CalcPage.js';
import ContactPage from '../Pages/ContactPage.js';

function PageContent(){
    return(
        <Routes>
            <Route path='/HomePage' element={<HomePage/>}/>
            <Route path='/CalcPage' element={<CalcPage/>}/>
            <Route path='/AboutPage' element={<AboutPage/>}/>
            <Route path='/ContactPage' element={<ContactPage/>}/>
        </Routes>
    );
}

export default PageContent;