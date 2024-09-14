import React, { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactModal.scss';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal:FC <ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChildClick=(e)=>{
    e.stopPropagation();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');  
    setMessage(''); 
    onClose();     
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="modal-content" onClick={handleChildClick}>
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
              />
              <button className="open-btn">Send</button>
                          <button className="close-btn" onClick={onClose}>
              Close
            </button>
            </form>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;