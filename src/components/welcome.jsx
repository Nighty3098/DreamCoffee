import React from 'react';
import { motion } from 'framer-motion';
import { faMugHot, faCoffeeBean, faCup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Welcome = () => {
  return (
    <div
      className="main-content"
      id="welcome"
      style={{
        height: '100vh',
        width: '100vw',
        background: 'var(--tr)',
      }}
    >
      <div className="main-content" id="welcome" style={{ height: '100%', width: '100%' }}>
        <motion.h1
          className="main-big-title"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: 'tween',
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          style={{
            margin: '0px',
            padding: '0px',
            textShadow: '2px 2px 8px var(--tr)',
            letterSpacing: '0',
            lineHeight: '1',
          }}
        >
          Dream
          <br />
          Coffee
          <hr />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: 'tween',
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          style={{
            color: 'var(--fd)',
            fontSize: '1.5rem',
            fontStyle: 'italic',
            textShadow: '1px 1px 4px var(--tr)',
          }}
        >
          Coffee that makes every moment special
        </motion.p>
      </div>
    </div>
  );
};

export default Welcome;
