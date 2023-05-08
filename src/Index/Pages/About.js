import  myimg from '.././Images/Jayash.jpg';

function About(){
  return (
    <div>
    <div className="aboutMe">
      <MyImage/>
      <p> This is a simple REACT web application with some basic CSS styling to understand navigation.

      Here is my <a href="https://www.linkedin.com/in/jayashree-vishwanathan-87aa2b149/">linkedin profile</a> follow to look more.
      The idea is to "keep it simple and stupid(KISS) and have a working soltution to get started and eveolve more on it".
      </p>
      <p>  Keep learning and growing!! </p>
      </div>
    </div>

  )
}

function MyImage(){

  return (  <img className="myPic" src={myimg} alt="MyPicture" />);

}
export default About;
