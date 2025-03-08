import React from "react";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      title: "Premium Coffee Beans",
      description: "Carefully sourced from the world's finest coffee regions"
    },
    {
      title: "Signature Drinks", 
      description: "Unique and creative coffee beverages crafted by our experts"
    },
    {
      title: "Cozy Atmosphere",
      description: "Perfect environment for work or relaxation"
    },
    {
      title: "Expert Baristas",
      description: "Professional team with years of coffee-making experience"
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", justifyContent: "center", justifyItems: "center" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        What Makes Us Special
      </motion.h2>

      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "30px",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "40px auto"
      }}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.1, delay: 0.3 + index * 0.1 }}
            style={{
              backgroundColor: "var(--tr)", 
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "30px",
              width: "280px",
              textAlign: "center",
              transition: "all 0.3s ease",
              border: "1px solid var(--tr)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h3 style={{ 
              marginBottom: "15px",
              fontSize: "1.5rem",
              color: "var(--accent)",
              fontFamily: "'Bebas Neue', sans-serif"
            }}>{feature.title}</h3>
            <p style={{ 
              fontSize: "1rem",
              lineHeight: "1.5",
              fontFamily: "'Lato', sans-serif"
            }}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div className="main-content">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: "800px", padding: "20px", lineHeight: "2", textAlign: "left", paddingLeft: "40px", paddingRight: "40px" }}
      >
        <motion.h1 
          style={{
            textShadow: "0px 0px 20px var(--tr)",
            letterSpacing: "0.2rem",
            borderBottom: "2px solid var(--accent)",
            paddingBottom: "0px",
            display: "inline-block"
          }}
        >
          ABOUT
        </motion.h1>
        
        <motion.h2>
          Welcome to Dream Coffee
        </motion.h2>
        
        <motion.p
          style={{
            borderLeft: "3px solid var(--accent)",
            borderRadius: "10px",
            paddingLeft: "20px",
            fontStyle: "italic"
          }}
        >
          Dream Coffee is a unique coffee shop where passion for coffee meets creativity and innovation. We carefully select the finest coffee beans from around the world to create exceptional coffee experiences for our guests.
        </motion.p>

        <div style={{ height: "30px" }} />

        <motion.p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "var(--accent)"
          }}
        >
          Come experience the magic of Dream Coffee. Whether you're a coffee connoisseur or just beginning your coffee journey, we're here to serve you the perfect cup.
        </motion.p>
        
        <div style={{ height: "150px" }} />
        
        <Features />
      </motion.div>
    </div>
  );
}

export default About;
