import React, { useState } from 'react'
import './Navbar.scss'
import { images } from "../../constants/index"
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { UilEstate, UilUser, UilFileInfoAlt, UilBriefcaseAlt, UilMessage, UilLaptopCloud } from '@iconscout/react-unicons'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  function renderSwitch(items) {
    switch (items) {
      case 'Home':
        return <a href={`#${items}`}><UilEstate />{items}</a>;
      case ("About"):
        return <a href={`#${items}`}><UilUser />{items}</a>;
      case ("Qualification"):
        return <a href={`#${items}`}><UilBriefcaseAlt />{items}</a>;
      case ("Work"):
        return <a href={`#${items}`}><UilLaptopCloud />{items}</a>;
      case ("Skills"):
        return <a href={`#${items}`}><UilFileInfoAlt />{items}</a>;
      case ("Contact"):
        return <a href={`#${items}`}><UilMessage />{items}</a>;
      default:
        return null;
    }
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.thoran} alt="" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Qualification", "Work", "Skills", "Contact"].map((items) => {
          return <li className="app__flex text-p" key={items} >
            <a href={`#${items}`} onClick={() => { setToggle(false) }}>{items}</a>
            <div />
          </li>
        })}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => { setToggle(true) }} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, easeOut: "easeOut" }}
          >
            <HiX onClick={() => { setToggle(false) }} />
            <ul>
              {["Home", "About", "Qualification", "Work", "Skills", "Contact"].map((items) => {
                return <li className="app__flex text-p" key={`link-${items}`} >
                  {renderSwitch(items)}
                </li>
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
