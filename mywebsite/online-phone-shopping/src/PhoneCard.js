import React from 'react';
import './PhoneCard.css';

const PhoneCard = ({ phone, deletePhone }) => {
  return (
    <div className="phone-card">
      <img src={phone.imageUrl} alt={phone.name} />
      <h2>{phone.name}</h2>
      <p>Price: {phone.price}</p>
      <a href={phone.buyLink}>Buy Now</a>
      <button onClick={() => deletePhone(phone.id)}>Delete</button>
    </div>
  );
};

export default PhoneCard;
