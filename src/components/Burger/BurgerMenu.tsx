import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './burgerMenu.scss';
import { logoIcon } from '../../utils/img';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <motion.div 
        className="burger-icon" 
        onClick={toggleMenu}
      >
        <motion.span className="line" variants={lineVariants} animate={isOpen ? 'open2' : 'closed'} />
        <motion.span className="line" variants={lineVariants} animate={isOpen ? 'disappear' : 'closed'} />
        <motion.span className="line" variants={lineVariants} animate={isOpen ? 'open1' : 'closed'}/>
      </motion.div>

      
      <motion.nav
        className="menu"
        initial={{ opacity: 0, x: '-100%' }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <a href="/" className="logo"><img src={logoIcon} alt="" /></a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/skills">Works</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </motion.nav>
    </div>
  );
};

const lineVariants = {
  open2: { rotate: 45, y: 6, opacity: 1, backgroundColor: 'white',  transition: { duration: 0.3 } },
  closed: { color:'white', rotate: 0, y: 0, transition: { duration: 0.3 } },
  open1: {rotate: -45, y: 6, opacity: 1,backgroundColor: 'white', y: -15, transition: { duration: 0.3 } },
  disappear: { opacity: 0, transition: { duration: 0.3 } }
};

export default BurgerMenu;