import {Route,Routes} from "react-router-dom";
import About from './Pages/About';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';


function RightBar(){
    return (
      <div className="rightBar content">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path ='/careers' element={<Careers/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          </Routes>
        </div>


    );
  }
  export default RightBar;
