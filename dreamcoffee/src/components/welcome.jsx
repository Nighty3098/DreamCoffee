import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="main-content" style={{ height: "100vh" }}>        
        <motion.h1 className="main-big-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dream<br/>Coffee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A coffee shop that dreams of coffee
        </motion.p>
    </div>
  );
}

export default Welcome;
