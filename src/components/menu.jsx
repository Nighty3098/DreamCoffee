import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { optimizedImage } from '../utils/imageOptimization';

const MenuItem = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        damping: 15 
      }}
      style={{ willChange: "transform, opacity" }}
      className="menu-item"
    >
      <img
        src={optimizedImage(item.image, 400)}
        alt={item.name}
        className="menu-item-image"
        loading="lazy"
      />
      <h3 className="menu-item-title">
        {item.name}
      </h3>
      <h3 className="menu-item-description">
        {item.description}
      </h3>
    </motion.div>
  );
};

const Menu = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const menuItems = {
    drinks: [
      {
        name: "Cappuccino",
        description: "Classic Italian coffee drink with milk foam",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
        ingredients: [
          "Espresso coffee",
          "Milk",
          "Milk foam"
        ],
        weight: "180 ml"
      },
      {
        name: "Caramel Latte",
        description: "Delicate coffee drink with caramel syrup",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
        ingredients: [
          "Espresso coffee",
          "Milk", 
          "Caramel syrup",
          "Whipped cream"
        ],
        weight: "250 ml"
      },
      {
        name: "Flat White",
        description: "Espresso with steamed milk and micro-foam",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61",
        ingredients: [
          "Double espresso",
          "Steamed milk",
          "Micro-foam"
        ],
        weight: "160 ml"
      },
      {
        name: "Mocha",
        description: "Espresso with hot chocolate and whipped cream",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e",
        ingredients: [
          "Espresso coffee",
          "Hot chocolate",
          "Milk",
          "Whipped cream"
        ],
        weight: "240 ml"
      },
      {
        name: "Iced Americano",
        description: "Chilled espresso with cold water and ice",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
        ingredients: [
          "Double espresso",
          "Cold water",
          "Ice cubes"
        ],
        weight: "300 ml"
      }
    ],
    desserts: [
      {
        name: "Cheesecake",
        description: "Delicate cream cheese dessert on a shortbread base",
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50",
        ingredients: [
          "Shortbread cookies",
          "Butter",
          "Cream cheese",
          "Sugar",
          "Eggs"
        ],
        weight: "150 g"
      },
      {
        name: "Brownie",
        description: "Chocolate dessert with a moist texture",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
        ingredients: [
          "Dark chocolate",
          "Butter",
          "Eggs",
          "Wheat flour",
          "Cocoa powder"
        ],
        weight: "100 g"
      },
      {
        name: "Tiramisu",
        description: "Classic Italian coffee-flavored dessert",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
        ingredients: [
          "Ladyfinger cookies",
          "Mascarpone",
          "Espresso coffee",
          "Cocoa powder", 
          "Eggs"
        ],
        weight: "120 g"
      }
    ]
  };

  const allItems = [...menuItems.drinks, ...menuItems.desserts];
  
  const visibleItems = isMobile && !showAll ? allItems.slice(0, 3) : allItems;

  return (
    <div className="main-content" id="menu">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="menu-container"
      >
        <motion.h1>
          MENU
        </motion.h1>
        <div className="menu-items-grid">
          {visibleItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        
        {isMobile && (
          <AnimatePresence mode="wait">
            {!showAll ? (
              <motion.button
                key="show-more"
                layoutId="toggle-button"
                className="show-more-button"
                onClick={() => setShowAll(true)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SHOW {allItems.length - 3}
              </motion.button>
            ) : (
              <motion.button
                key="show-less"
                layoutId="toggle-button"
                className="show-less-button"
                onClick={() => setShowAll(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                HIDE
              </motion.button>
            )}
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
};

export default Menu;
