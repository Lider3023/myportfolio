import React, { useEffect } from 'react'
import {  TypeAnimation } from "react-type-animation";
import  "./HomeContent.scss"
import { animate, motion, useMotionTemplate, useMotionValue} from 'framer-motion'




const leftBoxVariants={
  hidden:{
    y: 100
  },
  visible:{
   scale: 1.2, y: -60, x: 80 ,
    transition:{
      delay: 0.1, type: 'spring', stiffness: 320
    } 
  },
  hover:{
    scale: 1.3,
    transition:{
      type: "spring", stiffness: 220
    }
  }
}

const svgVariants={
  hidden: {
    opacity: 0,
    rotate: -180,
    scale: 0.1
  },
  visible: {
    
    opacity: 1,
    rotate: 0, 
    scale: 1.4,
    transition:{
      duration: 1 
    }
  },
}
const pathVariants={
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition:{
      duration: 5,     
      ease: 'easeInOut'
    }
  },
 
}


const Colors=["#efd5ff", "#8EC5FC", '#8EC5FC','#92FE9D','#E0C3FC']

const HomeContent = () => {
  const color=useMotionValue(Colors[0])
  const border=useMotionTemplate`1px solid ${color}`
  const boxShadow=useMotionTemplate`0px 4px 24px ${color}`
  useEffect(() => {
    animate(color, Colors, {
      ease: 'easeInOut',
      duration: 10, 
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [])
  
  return (
    <>
    
    <div className="header container">
      <div className="header__left">
        <motion.div className="header__left_box"
        variants={leftBoxVariants}
        initial='hidden'
        animate='visible'
        whileHover='hover'
        style={{boxShadow}}
        >
        <motion.h1 className="header__left_box_title"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ delay: 0.3}}
        >Hey, my name is <motion.span style={{color: color, fontWeight: '700'}}>Azam</motion.span></motion.h1>
       <motion.div className="header__left_box_dynamic-typer"
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{ delay: 1, type: 'spring', stiffness: 120 }}>
       <TypeAnimation
        sequence={[
          2000,
          `I am Web-Developer`,
          2000,
          `Making my project!!!`,
          2000,
          `Nice to meet you!!!`,
          2000,
          'I hope you will enjoy my portfolio',
          2000,
          " ",
        ]}
        speed={5}
        style={{ whiteSpace: 'pre-line', fontSize: '28px', color: "darkblue",
          fontWeight: '700'
        }}
        repeat={Infinity}
      />
       </motion.div>
        </motion.div>
      </div>
      <div className="header__right">
        <div className="header__right_box">
        <motion.svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24"
        variants={svgVariants}
        initial='hidden'
        animate='visible'
       style={{boxShadow, border}}
       drag
       dragConstraints={{top: 0, bottom:0 , right: 0, left:0}}
       dragElastic={0.1}
        >
  <motion.path 
  variants={pathVariants}
    initial='hidden'
    animate='visible'
  stroke={color} strokeLinecap="round" strokeWidth="0.5" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</motion.svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeContent