import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mrdeepak111099@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/_mrdeepak01_?igshid=YmMyMTA2M2Y=">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/deepakdiscus.discus.9?mibextid=LQQJ4d">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/MrDeepak22">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;