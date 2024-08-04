import React, { useState } from 'react';
import './Admin.css';
import AddPhoneForm from './AddPhoneForm';
import PhoneList from './PhoneList';

const initialPhones = [
  {
    id: 1,
    name: 'Phone Model A',
    price: '10,299',
    imageUrl: 'https://img.kilimall.com/c/public/store/2096/goods/image/101617610.png?x-image-process=image/format,webp/resize,w_360#',
    buyLink: '#phone-model-a'
  },
  {
    id: 2,
    name: 'Phone Model B',
    price: '10,888',
    imageUrl: 'https://image.kilimall.com/kenya/shop/store/goods/7733/2022/06/1655100894406d00daa29d9714f2e9604d729808b8a69_360.jpg.webp#',
    buyLink: '#phone-model-b'
  },
  // Add other initial phones here
];

const Admin = () => {
  const [phones, setPhones] = useState(initialPhones);

  const handleAddPhone = (newPhone) => {
    setPhones((prevPhones) => [
      ...prevPhones,
      { ...newPhone, id: prevPhones.length + 1 }
    ]);
  };

  const handleDeletePhone = (id) => {
    setPhones((prevPhones) => prevPhones.filter(phone => phone.id !== id));
  };

  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <AddPhoneForm onAddPhone={handleAddPhone} />
      <PhoneList phones={phones} onDeletePhone={handleDeletePhone} />
    </div>
  );
};

export default Admin;
