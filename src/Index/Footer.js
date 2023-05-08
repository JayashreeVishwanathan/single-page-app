import noCopyright from './Images/NotCopyright.png';
function Footer(){
  return (
    <h3 className="footer">
      All the content are tried in attempt to learn react and is not copyrighted <img src={noCopyright} style={{width:"15px",height:'15px'}} alt=''/>. Feel free to learn and explore!
      </h3>
    );
}

export default Footer;
