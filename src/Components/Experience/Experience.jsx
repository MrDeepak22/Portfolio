import React, { useContext } from "react";
import './Experience.css'
import { themeContext } from "../../Context";
function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">1+</div>
        <span style={{color:darkMode ?'white' : ''}}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">3+</div>
        <span style={{color:darkMode ?'white' : ''}}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">1</div>
        <span style={{color:darkMode ?'white' : ''}}>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
}

export default Experience;
