// src/App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



// Product data
const product = {
  name: "GoPro",
  price: "$49.99",
  description: "A cool gadget that makes your life easier by changing your view of photography and documentary.",
  image: "gopro.jpg"
};

// Name component
const Name = () => <h2>{product.name}</h2>;

// Price component
const Price = () => <p>{product.price}</p>;

// Description component
const Description = () => <p>{product.description}</p>;

// Image component
const Image = () => <img src={product.image} alt={product.name} />;

// App component
const App = () => {
  const firstName = "Ayoub";

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="./gopro.jpg" alt={firstName} />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
};

export default App;
