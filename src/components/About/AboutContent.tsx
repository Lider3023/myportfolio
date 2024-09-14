import React, { useEffect, useState } from 'react'
import './AboutContent.scss'
import { AnimatePresence, animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import ContactModal from '../Modal/ContactModal';
import { picture } from '../../utils/img';

const Colors=["#efd5ff", "#8EC5FC", '#8EC5FC','#92FE9D','#E0C3FC']

const AboutContent = () => {
 
  const color=useMotionValue(Colors[0])
  const border=useMotionTemplate`3px solid ${color}`
  const boxShadow=useMotionTemplate`0px 4px 24px ${color}`
  useEffect(() => {
    animate(color, Colors, {
      ease: 'easeInOut',
      duration: 10, 
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; 
  
  return (
<>
<div className="about container">
  <div className="about__left">
    <motion.div className="about__left_box"
    style={{
      border, 
      boxShadow
    }}
    initial={{ opacity: 0, scale: 0.7}}
    animate={{
      opacity: 1, scale: 1.0
    }}
    transition={{
      type: 'spring', 
      stiffness: 220,
    }}
    >
      <motion.h2 className="about__left_box_title"
        initial={{ opacity: 0, scale: 4}}
        animate={{opacity:1, scale:1.1}}
        transition={{delay:0.9, type:'spring', stiffness: 220}}
        >My information:</motion.h2>
      <ul className="about__left_box_list">
        <motion.li className="about__left_box_list_li"
          initial={{x:-1000}}
          animate={{x:0}}
          transition={{delay:0.5}}
          >First Name: <span>Azam</span></motion.li>
        <motion.li className="about__left_box_list_li"
        initial={{x:-1000}}
        animate={{x:0}}
        transition={{delay:0.5}}
        >Last Name: <motion.span>B.</motion.span></motion.li>
                <motion.li className="about__left_box_list_li"
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{delay:0.4}}>Age: <motion.span>19 years</motion.span></motion.li>
        <motion.li className="about__left_box_list_li"
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{delay:0.2}}>Email: <motion.span>hello123@gmail.com</motion.span></motion.li>
        <motion.li className="about__left_box_list_li"
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{delay:0.4}}>Number: <motion.span>+998 (90) 123-45-56 </motion.span></motion.li>
        <motion.li className="about__left_box_list_li"
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{delay:0.3}}>Nationality: <motion.span>Uzbek</motion.span></motion.li>
        <motion.li className="about__left_box_list_li"
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{delay:0.6}}>Experience: <motion.span>10 month</motion.span></motion.li>
      </ul>
      <motion.button className="about__left_box_btn"
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255) ",
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          x:[0, -10, 10,-10, 10,-10, 10,-10, 10, 0]
        }}
        transition={{
        x:{
          delay: 0.7,
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
        }}
        onClick={openModal}
        >Contact me</motion.button>
           <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </motion.div>
  </div>
  <div className="about__right">
    <motion.div className="about__right_box"
    style={{
      border, 
      boxShadow
    }}
    initial={{opacity:0,rotate: -180}}
    animate={{opacity:1,rotate: 0}}
    transition={{delay:1, type:'spring', stiffness:220 }}
    >
<motion.img src={picture} alt="" 
initial={{ opacity: 0, scale: 3.0}}
animate={{ opacity: 1, scale: 1 }}
transition={{delay: 1.6, type: 'spring', stiffness: 220}}
drag
dragConstraints={{top: 0, bottom:0 , right: 0, left:0}}
dragElastic={0.3}
style={{border}}
/>
    </motion.div>
  </div>
</div>
</>
  )
}

export default AboutContent