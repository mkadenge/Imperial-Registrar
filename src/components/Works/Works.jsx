import React, { useContext } from "react";
import "./Works.css";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Get to Know 
          </span>
          <span>About Us</span>
          <spane>
          Imperial Registrars is a professional services Firm registered and 
            <br />
            established in Kenya to provide invaluable and holistic professional services
            <br />
            to various organizations with various needs. We specialize in solving the complexities of company secretarial practice, governance and corporate advisory services. 
            <br />
            
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact Us</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
      <div className="about__content">

<div className="about__cards">

  

</div>
<p className="para">
At Imperial Registrars we specialize in offering Value Based, Quality and Timely Services for our clients with the aim of assisting them to do their business in Compliance with statutory requirements, industry regulations, internal policies and procedures and controls of different entities. We have a team of well experienced
 Professionals who will handle your requirements in the best way possible. 

</p>


</div>
        {/* background Circles */}
        
      </div>
    </div>
  );
};

export default Works;
