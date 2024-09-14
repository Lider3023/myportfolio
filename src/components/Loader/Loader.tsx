import React, { FC } from 'react';
import { motion } from 'framer-motion';
import './loader.scss'; 

const Loader:FC = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.5, 1, 1.5, 1, 1.5, 1, 1.5, 1] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />
    </div>
  );
};

export default Loader;