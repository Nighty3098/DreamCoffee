import React from 'react';
import { motion } from 'framer-motion';

export const Features = () => {
  const features = [
    {
      title: 'Premium Coffee Beans',
      description: "Carefully sourced from the world's finest coffee regions",
    },
    {
      title: 'Signature Drinks',
      description: 'Unique and creative coffee beverages crafted by our experts',
    },
    {
      title: 'Cozy Atmosphere',
      description: 'Perfect environment for work or relaxation',
    },
    {
      title: 'Expert Baristas',
      description: 'Professional team with years of coffee-making experience',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
      }}
    >
      <hr />
      <motion.h1
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        What Makes Us Special
      </motion.h1>
      <hr />
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          gap: '40px',
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.3,
              delay: 0.05 * index,
              ease: 'easeOut',
            }}
          >
            <h3 className="menu-item-title">{feature.title}</h3>
            <h3 className="menu-item-description">{feature.description}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="main-content" id="about">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: '800px',
          padding: '20px',
          lineHeight: '2',
          textAlign: 'left',
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >
        <motion.h1
          style={{
            textShadow: '0px 0px 20px var(--tr)',
            letterSpacing: '0.2rem',
            borderBottom: '2px solid var(--accent)',
            paddingBottom: '0px',
            display: 'inline-block',
          }}
        >
          ABOUT
        </motion.h1>

        <motion.h2>Welcome to Dream Coffee</motion.h2>

        <motion.p
          style={{
            borderLeft: '3px solid var(--accent)',
            borderRadius: '10px',
            paddingLeft: '20px',
            fontStyle: 'italic',
          }}
        >
          Dream Coffee is a unique coffee shop where passion for coffee meets creativity and
          innovation. We carefully select the finest coffee beans from around the world to create
          exceptional coffee experiences for our guests.
        </motion.p>

        <div style={{ height: '30px' }} />

        <motion.p
          style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: '500',
            color: 'var(--accent)',
          }}
        >
          Come experience the magic of Dream Coffee. Whether you're a coffee connoisseur or just
          beginning your coffee journey, we're here to serve you the perfect cup.
        </motion.p>

        <div style={{ height: '150px' }} />

        <Features />
      </motion.div>
    </div>
  );
};

export default About;
