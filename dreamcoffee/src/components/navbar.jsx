import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faHouse, faQuestion, faMessage, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const navButtons = [
  { icon: faHouse, text: "Home" },
  { icon: faQuestion, text: "About" },
  { icon: faMessage, text: "Contacts" }
];

const NavButton = ({ icon, text, index }) => (
  <motion.button 
    className="navbar-button"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    <FontAwesomeIcon className="icon" icon={icon} />
    {text}
  </motion.button>
);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="navbar">
      <div className="navbar-title">
        <FontAwesomeIcon icon={faMugHot} />
        <p>Dream Coffee</p>
      </div>
      
      <div className="navbar-buttons desktop-menu">
        {navButtons.map((button, index) => (
          <NavButton 
            key={index}
            icon={button.icon}
            text={button.text}
          />
        ))}
      </div>
      
      <div className="mobile-menu-container">
        <motion.button 
          className="burger-button" 
          onClick={toggleMenu}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FontAwesomeIcon icon={faBars} />
        </motion.button>
        
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.button 
                className="close-menu" 
                onClick={toggleMenu}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FontAwesomeIcon icon={faXmark} />
              </motion.button>
              
              {navButtons.map((button, index) => (
                <NavButton 
                  key={index}
                  icon={button.icon}
                  text={button.text}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default NavBar;
