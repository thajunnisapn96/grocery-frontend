// WhatsAppPopup.jsx

import React from 'react';

const WhatsAppPopup = ({ isOpen, onClose }) => {
  const phoneNumber = '1234567890';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  return (
    <div className={`whatsapp-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
      
       
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button style={{ background: 'none', border: 'none', padding: 0, fontSize: 'inherit' }}>
        <i className="fab fa-whatsapp text-success"></i>
      </button>
    </a>


      </div>
    </div>
  );
};

export default WhatsAppPopup;
