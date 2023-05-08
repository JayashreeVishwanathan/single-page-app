import Header from './Index/Header';
import SideBar from './Index/SideBar';
import RightBar from './Index/RightBar';
import Footer from './Index/Footer';
import react from 'react';
import {HashRouter} from "react-router-dom";


function Main(){
  return (
    <HashRouter>
    <div>
      <Header/>
      <SideBar/>
      <RightBar/>
      <Footer/>
    </div>
  </HashRouter>
  )
}
export default Main;
