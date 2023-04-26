import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { Link } from "react-scroll";

// import { motion } from "framer-motion"
function Intro() {
    // const transition = {duration:2,type:'spring'}
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id='Home'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode ?'white' : ''}}>Hi! I Am</span>
                <span>Deepak Kumar</span>
                <span style={{color:darkMode ?'white' : '',fontSize:'20px'}}>Highly motivated and goal-oriented <b>System Engineer(Leve:-1)</b> with experience of 1.2 Years in information technology industry, producting the quality of work.</span>
            </div>
            <Link
              spy={true}
              to='contact'
              smooth={true}
              activeClass="activeClass"
            >
              {/* <li>Home</li> */}
            <button className='button i-button'>Hire Me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/MrDeepak22">
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/deepak-k-704410ab">
                <img src={LinkedIn} alt="" />
                </a>
                <a href="https://instagram.com/_mrdeepak01_?igshid=YmMyMTA2M2Y=">
                <img src={Instagram} alt="" />
                </a>
                
                
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div className='floating-div' style={{top:'-4%', left:"68%"}}>
                <FloatingDiv image={crown} text1="Web" text2="Developer"/>
            </div>
            <div className='floating-div' style={{top:'18rem', left:"0rem"}}>
                <FloatingDiv image={thumbup} text1='Backend' text2="Developer"/>
            </div>
            {/* Blur Divs */}
            <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro