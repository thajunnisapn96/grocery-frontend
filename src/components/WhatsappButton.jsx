// WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
  const openWhatsAppChat = () => {
    // Replace '6238747021' with the actual WhatsApp number
    const phoneNumber = '6238747021';
    const message = 'Hello! I am interested in your products.';

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="whatsapp-icon" onClick={openWhatsAppChat}>
      <i style={{ fontSize: '24px' }} className="fab fa-whatsapp fa-beat text-success fs-1"></i>
    </div>
  );
};

export default WhatsAppButton;
