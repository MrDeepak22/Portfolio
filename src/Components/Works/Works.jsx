import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import Nodejs from '../../img/nodejs.svg'
// import JavaScript from "../../img/js.webp";
import MySQL from "../../img/mysql.webp";
import ExpressJS from "../../img/express.png";
import ReactJS from "../../img/react.webp";
import Mongo from "../../img/mongodb.avif";
import { Link } from "react-scroll";

function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Experience">
      {/* Left Side */}
      <div className="awesome">
        <span style={{color:darkMode ?'white' : ''}}>Worked On All These</span>
        <span>Technologies</span>
        <span style={{color:darkMode ?'white' : '', fontSize:'16px'}}>
          1. NodeJs
          <br />
          2. ExpressJs
          <br />
          3. MySQL(With Sequelize ORM)
          <br />
          4. MongoDB(Mongoose ODM)
          <br />
          5. HTML(Hyper Text Markup Language)
          <br />
          6. CSS(Basics)
          <br />
          7. React(Basics)
         
        </span>
        <Link
              spy={true}
              to='contact'
              smooth={true}
              activeClass="activeClass"
            >
              {/* <li>Home</li> */}
            {/* <button className='button i-button'>Hire Me</button> */}
        <button className="button s-button">Hire Me</button>
            </Link>
        <div className="s-blur blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="w-right" >
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Nodejs} alt=""  height='150px' width='150px' />
          </div>
          <div className="w-secCircle">
            <img src={MySQL} alt="" height='130px' width='130px'/>
          </div>
          <div className="w-secCircle">
            <img src={ReactJS} alt="" height='130px' width='130px'/>
          </div>
          <div className="w-secCircle">
            <img src={ExpressJS} alt="" height='130px' width='130px' />
          </div>
          <div className="w-secCircle">
            <img src={Mongo} alt="" height='140px' width='140px'/>
          </div>
        </div>
        {/* BackGround Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
