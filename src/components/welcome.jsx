import React from 'react';
import { motion } from 'framer-motion';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Welcome = () => {
  return (
    <div className="main-content" id="welcome" style={{ height: '100vh', width: '100vw' }}>
      <div className="main-content" id="welcome" style={{ height: '100%', width: '100%' }}>
        <motion.h1
          className="main-big-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: 'tween',
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          Dream
          <br />
          Coffee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: 'tween',
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          A coffee shop that dreams of coffee
        </motion.p>
      </div>
    </div>
  );
};

export default Welcome;
