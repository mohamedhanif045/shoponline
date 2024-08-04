import React, { useState } from 'react';
import './AddPhoneForm.css';

const AddPhoneForm = ({ onAddPhone }) => {
  const [newPhone, setNewPhone] = useState({ name: '', price: '', imageUrl: '', buyLink: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPhone((prevPhone) => ({
      ...prevPhone,
      [name]: value
    }));
  };

  const handleAddPhone = () => {
    onAddPhone(newPhone);
    setNewPhone({ name: '', price: '', imageUrl: '', buyLink: '' });
  };

  return (
    <div className="add-phone-form">
      <input
        type="text"
        name="name"
        value={newPhone.name}
        onChange={handleInputChange}
        placeholder="Phone Name"
      />
      <input
        type="text"
        name="price"
        value={newPhone.price}
        onChange={handleInputChange}
        placeholder="Phone Price"
      />
      <input
        type="text"
        name="imageUrl"
        value={newPhone.imageUrl}
        onChange={handleInputChange}
        placeholder="Image URL"
      />
      <input
        type="text"
        name="buyLink"
        value={newPhone.buyLink}
        onChange={handleInputChange}
        placeholder="Buy Link"
      />
      <button onClick={handleAddPhone}>Add Phone</button>
    </div>
  );
};

export default AddPhoneForm;
