import React, { useEffect } from 'react'
import './Works.scss'
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Burger, Cinema, Clock, GoTrip, SilverHouse, ToDo, Weather, github } from '../../utils/img'



const titleVariants={
  hidden:{
    scale: 4
  },
  visible:{
    scale: 1,
    transition:{
      type: 'spring', stiffness: 220
    }
  },
  tap:{
    scale: 1.1,
    transition:{
      type: 'spring', stiffness: 420
    }
  }
}
const Colors=["#efd5ff", "#8EC5FC", '#8EC5FC','#92FE9D','#E0C3FC']
const Works = () => {
  const color=useMotionValue(Colors[0])
  const border=useMotionTemplate`1px solid ${color}`
  const boxShadow=useMotionTemplate`0px 4px 24px ${color}`
  const textShadow=useMotionTemplate`0px 4px 24px ${color}`
  useEffect(() => {
    animate(color, Colors, {
      ease: 'easeInOut',
      duration: 10, 
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [])
  return (
    <div className="works_fix container">
       <div className="works ">
      <motion.h2 className="works__title" style={{color: color, textShadow}}
      variants={titleVariants}
      initial='hidden'
      animate='visible'
      whileTap='tap'
      >My Works</motion.h2>
      <div className="works__content">
      <div className="works__content_cards">
      <motion.div className="works__content_cards_card"
      style={{border, boxShadow}}
      initial={{ opacity: 0 ,scale: 1.3}}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: 0.1,
        type: 'spring',
        stiffness: 220
      }}
      >
      <motion.img src={Cinema} alt="" className="works__content_cards_card_img" 
      style={{border,}}
      animate={{scale:1.2,
      }}
      transition={{delay: 2.5, type: 'spring', stiffness: 220 }}
      />
      <div className="works__content_cards_card_info">
        <motion.h2 className="works__content_cards_card_info-title"
        style={{color: color}}
        >Vue Cinema</motion.h2>
        <motion.a href="https://github.com/Lider3023/vue-cinema" className="works__content_cards_card_info-link" target='_blank'
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255) ",
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          x:[0, -10, 10,-10, 10,-10, 10,-10, 10, 0]
        }}
        transition={{
        x:{
          delay: 1,
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
        }}
        >View Repository</motion.a>
      </div>
    </motion.div>
    <motion.div className="works__content_cards_card"
      style={{border, boxShadow}}
      initial={{ opacity: 0 ,scale: 1.3}}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: 0.3,
        type: 'spring',
        stiffness: 220
      }}
      >
      <motion.img src={Clock} alt="" className="works__content_cards_card_img" 
      style={{border,}}
       animate={{scale:1.2,
      }}
      transition={{delay: 2.7, type: 'spring', stiffness: 220 }}
      />
      <div className="works__content_cards_card_info">
        <motion.h2 className="works__content_cards_card_info-title"
        style={{color: color}}
        >Clock</motion.h2>
        <motion.a href="https://github.com/Lider3023/Clock" className="works__content_cards_card_info-link" target='_blank'
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255) ",
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          x:[0, -10, 10,-10, 10,-10, 10,-10, 10, 0]
        }}
        transition={{
        x:{
          delay: 1,
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
        }}
        >View Repository</motion.a>
      </div>
    </motion.div>
    <motion.div className="works__content_cards_card"
      style={{border, boxShadow}}
      initial={{ opacity: 0 ,scale: 1.3}}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: 0.5,
        type: 'spring',
        stiffness: 220
      }}
      >
    <motion.img src={Burger} alt="" className="works__content_cards_card_img" 
      style={{border,}}
       animate={{scale:1.2,
      }}
      transition={{delay: 2.9, type: 'spring', stiffness: 220 }}
      />
      <div className="works__content_cards_card_info">
        <motion.h2 className="works__content_cards_card_info-title"
        style={{color: color}}
        >Burger</motion.h2>
        <motion.a href="https://github.com/Lider3023/Burger" className="works__content_cards_card_info-link" target='_blank'
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255) ",
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          x:[0, -10, 10,-10, 10,-10, 10,-10, 10, 0]
        }}
        transition={{
        x:{
          delay: 1,
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
        }}
        >View Repository</motion.a>
      </div>
    </motion.div>
    <motion.div className="works__content_cards_card"
      style={{border, boxShadow}}
      initial={{ opacity: 0 ,scale: 1.3}}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: 0.7,
        type: 'spring',
        stiffness: 220
      }}
      >
      <motion.img src={GoTrip} alt="" className="works__content_cards_card_img" 
      style={{border,}}
      animate={{scale:1.2,
      }}
      transition={{delay: 3.1, type: 'spring', stiffness: 220 }}
      />
      <div className="works__content_cards_card_info">
        <motion.h2 className="works__content_cards_card_info-title"
        style={{color: color}}
        >Go Trip</motion.h2>
        <motion.a href="https://github.com/Lider3023/Go-Trip" className="works__content_cards_card_info-link" target='_blank'
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255) ",
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          x:[0, -10, 10,-10, 10,-10, 10,-10, 10, 0]
        }}
        transition={{
        x:{
          delay: 1,
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
        }}
        >View Repository</motion.a>
      </div>
    </motion.div>
    <motion.div className="works__content_cards_card"
      style={{border, boxShadow}}
      initial={{ opacity: 0 ,scale: 1.3}}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: 0.9,
        type: 'spring',
        stiffness: 220
      }}
      >
       <motion.img src={SilverHouse} alt="" className="works__content_cards_card_img" 
      style={{border,}}
      animate={{scale:1.2,
      }}
      transition={{delay: 3.3, type: 'spring', stiffness: 220 }}
      />
      <div className="works__content_cards_card_info">
        <motion.h2 className="works__content_cards_card_info-title"
        style={{color: color}}
        >Silver House</motion.h2>
        <motion.a href="https://github.com/Lider3023/Silver-house" className="works__content_cards_card_info-link" target='_blank'
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255) ",
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          x:[0, -10, 10,-10, 10,-10, 10,-10, 10, 0]
        }}
        transition={{
        x:{
          delay: 1,
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
        }}
        >View Repository</motion.a>
      </div>
    </motion.div>
    <motion.div className="works__content_cards_card"
    style={{border, boxShadow}}
    initial={{ opacity: 0 ,scale: 1.3}}
    animate={{
      opacity: 1,
      scale: 1
    }}
    transition={{
      delay: 1.1,
      type: 'spring',
      stiffness: 220
    }}
      >
      <motion.img src={ToDo} alt="" className="works__content_cards_card_img" 
      style={{border,}}
      animate={{scale:1.2,
      }}
      transition={{delay: 3.5, type: 'spring', stiffness: 220 }}
      />
      <div className="works__content_cards_card_info">
        <motion.h2 className="works__content_cards_card_info-title"
        style={{color: color}}
        >ToDo List</motion.h2>
        <motion.a href="https://github.com/Lider3023/To-do-List" className="works__content_cards_card_info-link" target='_blank'
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255) ",
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          x:[0, -10, 10,-10, 10,-10, 10,-10, 10, 0]
        }}
        transition={{
        x:{
          delay: 1,
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
        }}
        >View Repository</motion.a>
      </div>
    </motion.div>
    <motion.div className="works__content_cards_card"
      style={{border, boxShadow}}
      initial={{ opacity: 0 ,scale: 1.3}}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 1.5,
        type: 'spring',
        stiffness: 220
      }}
      >
    <motion.img src={Weather} alt="" className="works__content_cards_card_img" 
      style={{border,}}
      animate={{scale:1.2,
      }}
      transition={{delay: 3.7, type: 'spring', stiffness: 220 }}
      />
      <div className="works__content_cards_card_info">
        <motion.h2 className="works__content_cards_card_info-title"
        style={{color: color}}
        >Vue Cinema</motion.h2>
        <motion.a href="https://github.com/Lider3023/Weather" className="works__content_cards_card_info-link" target='_blank'
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255) ",
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          x:[0, -10, 10,-10, 10,-10, 10,-10, 10, 0]
        }}
        transition={{
        x:{
          delay: 1,
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
        }}
        >View Repository</motion.a>
      </div>
    </motion.div>
      </div>
      </div>
    </div>
    </div>
   
  )
}

export default Works