import React from 'react';
import "./ContactMee.css";

import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="headline-track">
        <h1 className="headline">LET’S TALK ✉️ LET’S TALK 📞 LET’S TALK 🌍 </h1>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-card">
            <h2>📬 Contact Info</h2>
            <p><strong>Email:</strong> devbro@codeking.in</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Somewhere Between Fields & Firewalls</p>

            <div className="socials">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h2>🔥 Drop a Message</h2>
          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="What's your message, dost?" />
          <button type="submit">Send  Message 💥</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
