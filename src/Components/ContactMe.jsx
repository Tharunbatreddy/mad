import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactMe.css";

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <span>madhanmettukuru@gmail.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} size="lg" />
          <span><b>+91 6305561973</b></span>
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://www.facebook.com/madhan.metukuru/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link link-facebook"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/madhan_mettukuru/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link link-instagram"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/madhan-mettukuru-14a276185/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link link-linkedin"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          href="https://github.com/METTUKURUMADHAN"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link link-github"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
      </div>

      {/* Placeholder modal if needed later */}
      <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Contact Modal">
        <h2>Contact Me</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ContactMe;
