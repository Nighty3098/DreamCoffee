import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  const contacts = [
    {
      icon: faPhone,
      title: "PHONE",
      info: "+7 (999) 123-45-67"
    },
    {
      icon: faEnvelope,
      title: "Email", 
      info: "info@dreamcoffee.ru"
    },
    {
      icon: faLocationDot,
      title: "ADDRESS",
      info: "ул. Пушкина, д. 10, Москва"
    }
  ];

  return (
    <div className="contact-info-container">
      {contacts.map((contact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileTap={{ scale: 0.9 }}
          className="contact-card"
        >
          <FontAwesomeIcon 
            icon={contact.icon}
            className="contact-icon"
          />
          <h3 className="contact-title">
            {contact.title}
          </h3>
          <p className="contact-info">
            {contact.info}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="map-container"
    >
      <iframe 
        title="Карта"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887638468843!2d37.618!3d55.756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjYiTiAzN8KwMzcnMDQuOCJF!5e0!3m2!1sru!2sru!4v1234567890"
        width="100%"
        height="100%"
        className="map-iframe"
        allowFullScreen=""
        loading="lazy"
      />
    </motion.div>
  );
}

const Contacts = () => {
  return (
    <div className="main-content" id="contacts">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="contacts-container"
      >
        <motion.h1 className="contacts-title">
          CONTACTS
        </motion.h1>
        <ContactInfo />
        <Map />
      </motion.div>
    </div>
  );
}

export default Contacts;
