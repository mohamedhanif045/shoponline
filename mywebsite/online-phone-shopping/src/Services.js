import React from 'react';
import './service.css'; // Ensure this file contains styles for the service page
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome for social icons

// Array of phone details
const phones = [
  {
    name: 'Phone Model A',
    price: '10,299',
    imageUrl: 'https://img.kilimall.com/c/public/store/2096/goods/image/101617610.png?x-image-process=image/format,webp/resize,w_360#',
    buyLink: '#phone-model-a'
  },
  {
    name: 'Phone Model B',
    price: '10,888',
    imageUrl: 'https://image.kilimall.com/kenya/shop/store/goods/7733/2022/06/1655100894406d00daa29d9714f2e9604d729808b8a69_360.jpg.webp#',
    buyLink: '#phone-model-b'
  },
  {
    name: 'Phone Model C',
    price: '8,999',
    imageUrl: 'https://img.kilimall.com/c/obs/seller/3469/goods_image/240727144520_4c5322623c10df0fb78ab7552f383d8d.jpg?x-image-process=image/format,webp/resize,w_360#',
    buyLink: '#phone-model-c'
  },
  {
    name: 'Phone Model D',
    price: '10,299',
    imageUrl: 'https://img.kilimall.com/c/public/store/2819/goods/image/101812141.jpg?x-image-process=image/format,webp/resize,w_360#',
    buyLink: '#phone-model-d'
  },
  {
    name: 'Phone Model E',
    price: '13,145',
    imageUrl: 'https://img.kilimall.com/c/public/store/8299/goods/image/100994593.jpeg?x-image-process=image/format,webp/resize,w_360#',
    buyLink: '#phone-model-e'
  },
  {
    name: 'Phone Model F',
    price: '13,299',
    imageUrl: 'https://image.kilimall.com/kenya/shop/store/goods/2096/2024/01/17042770113419a3d279c343340e4b026818b1c5e0e33_360.png.webp#',
    buyLink: '#phone-model-f'
  },
  {
    name: 'Phone Model G',
    price: '6,199',
    imageUrl: 'https://image.kilimall.com/kenya/shop/store/goods/5963/2022/08/1660044709638fd34ee6c08d24c0488c61884b4d46ca6_360.jpg.webp#',
    buyLink: '#phone-model-g'
  },
  {
    name: 'Phone Model H',
    price: '8,999',
    imageUrl: 'https://img.kilimall.com/c/public/store/2819/goods/image/101812141.jpg?x-image-process=image/format,webp/resize,w_360#',
    buyLink: '#phone-model-h'
  }
];

const handleBuyClick = (phone) => {
  // Function to validate numeric input
  const isValidNumber = (input) => /^\d+$/.test(input);

  // Function to validate alphanumeric input
  const isValidAlphanumeric = (input) => /^[a-zA-Z0-9]+$/.test(input);

  // Prompt user for payment method
  const method = prompt("Choose a payment method:\n1. M-Pesa\n2. Bank Details\n3. Credit Card");

  if (method === '1') {
    // M-Pesa Payment
    const accountNumber = prompt("Enter your M-Pesa account number:");
    const amount = prompt("Enter the amount to pay:");
    const pin = prompt("Enter your M-Pesa pin (4 digits):");

    if (!isValidNumber(accountNumber)) {
      alert('Invalid M-Pesa account number. It must be numeric.');
      return;
    }
    if (!isValidNumber(amount)) {
      alert('Invalid amount. It must be numeric.');
      return;
    }
    if (!isValidNumber(pin) || pin.length !== 4) {
      alert('Invalid PIN. It must be 4 digits.');
      return;
    }

    alert(`M-Pesa Payment Details:\nPhone: ${phone.name}\nPrice: ${phone.price}\nAmount to Pay: ${amount}\nAccount Number: ${accountNumber}\nPin: ${'*'.repeat(pin.length)}`);
    alert('Thank you for your purchase!');
  } else if (method === '2') {
    // Bank Details Payment
    const accountNumber = prompt("Enter your bank account number:");
    const amount = prompt("Enter the amount to pay:");
    const pin = prompt("Enter your bank PIN (4 digits):");

    if (!isValidAlphanumeric(accountNumber)) {
      alert('Invalid bank account number. It must be alphanumeric.');
      return;
    }
    if (!isValidNumber(amount)) {
      alert('Invalid amount. It must be numeric.');
      return;
    }
    if (!isValidNumber(pin) || pin.length !== 4) {
      alert('Invalid PIN. It must be 4 digits.');
      return;
    }

    alert(`Bank Payment Details:\nPhone: ${phone.name}\nPrice: ${phone.price}\nAmount to Pay: ${amount}\nAccount Number: ${accountNumber}\nPin: ${'*'.repeat(pin.length)}`);
    alert('Thank you for your purchase!');
  } else if (method === '3') {
    // Credit Card Payment
    const cardNumber = prompt("Enter your credit card number:");
    const amount = prompt("Enter the amount to pay:");
    const cardPin = prompt("Enter your credit card PIN (4 digits):");

    if (!isValidAlphanumeric(cardNumber)) {
      alert('Invalid credit card number. It must be alphanumeric.');
      return;
    }
    if (!isValidNumber(amount)) {
      alert('Invalid amount. It must be numeric.');
      return;
    }
    if (!isValidNumber(cardPin) || cardPin.length !== 4) {
      alert('Invalid PIN. It must be 4 digits.');
      return;
    }

    alert(`Credit Card Payment Details:\nPhone: ${phone.name}\nPrice: ${phone.price}\nAmount to Pay: ${amount}\nCard Number: ${cardNumber}\nCard Pin: ${'*'.repeat(cardPin.length)}`);
    alert('Thank you for your purchase!');
  } else {
    alert('Invalid payment method selected.');
  }
};

const Services = () => {
  return (
    <div className="services">
      <div className="info-card">
        <h1>Our Services</h1>
        <p>
          Welcome to our service center, where we offer a wide range of options to meet your mobile needs. Our phone sales service provides you with the latest and most popular phone models at competitive prices. We ensure that our phones are of high quality and come with a warranty to give you peace of mind.
        </p>
        <p>
          In addition to phone sales, we also offer professional phone repair services. Whether you have a cracked screen, battery issues, or any other problem, our skilled technicians can handle it efficiently. We use high-quality parts and offer quick turnaround times to get your phone back in working condition as soon as possible.
        </p>
        <p>
          We also provide a variety of accessories to enhance your phone experience. From protective cases to charging cables, you can find everything you need to keep your device safe and functional. Our accessories are selected for their quality and compatibility with a wide range of phone models.
        </p>
        <p>
          Finally, our customer support team is always here to help. If you have any questions or need assistance with any of our services, please don't hesitate to reach out. We are committed to providing excellent customer service and ensuring that all your needs are met.
        </p>
      </div>
      <div className="phone-container">
        {phones.map((phone, index) => (
          <div key={index} className="phone-card">
            <img src={phone.imageUrl} alt={phone.name} className="phone-image" />
            <div className="phone-details">
              <h2>{phone.name}</h2>
              <p>Price: {phone.price}</p>
              <button className="buy-now" onClick={() => handleBuyClick(phone)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="social-icons">
        <a href="mailto:your-email@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
        <a href="https://youtube.com/your-channel" title="YouTube"><i className="fab fa-youtube"></i></a>
        <a href="https://www.tiktok.com/@yourprofile" title="TikTok"><i className="fab fa-tiktok"></i></a>
        <a href="tel:+1234567890" title="Phone"><i className="fas fa-phone"></i></a>
        <a href="https://wa.me/yourwhatsappnumber" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/yourprofile" title="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com/yourprofile" title="Twitter"><i className="fab fa-twitter"></i></a>
      </div>
      <footer className="footer">
        <p>&copy; 2024 PhoneWorld! All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
