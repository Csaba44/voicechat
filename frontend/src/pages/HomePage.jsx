import React from 'react'
import "./HomePage.css"
import { motion } from "framer-motion"
import { FiBatteryCharging, FiWifi } from "react-icons/fi"
import headsetImg from "../assets/headset.png"


function HomePage() {
  return (
    <>
      <div className="home container-lg">
        <div className='hero d-flex'>
          <div className='col-6'>
            <h1>Better chat,
              happier communities</h1>
            <h3>Guilded upgrades your group chat and equips your server with integrated event calendars, forums, and more</h3>
            <button className="btn btn-wobble">Get Started</button>
          </div>
          <div className='col-6 headset'>
            <motion.img
              src={headsetImg}
              alt="Headset"
              className="img-fluid"
              animate={{
                y: [0, -40, 0], 
              }}
              transition={{
                duration: 3,   
                ease: "easeInOut", 
                repeat: Infinity,  
                repeatType: "mirror" 
              }}
            />
          </div>
        </div>

        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
