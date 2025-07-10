import React from 'react';
import './happyclient.css';
import clientPhoto from '../../assets/clientPhoto.webp'

const clients = [
  {
    name: "Rowhan Smith",
    role: "CEO, Foreclosure",
    image: clientPhoto,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Shipra Kayak",
    role: "Brand Designer",
    image: clientPhoto,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Lepore",
    role: "CEO, Foreclosure",
    image: clientPhoto,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Marry Freeman",
    role: "Marketing Manager at Mixit",
    image: clientPhoto,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lucy",
    role: "Sales Rep at Alibaba",
    image: clientPhoto,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  
];

const HappyClients = () => {
  return (
    <section className="happy-clients">
      <h2 className="section-title">Happy Clients</h2>
      <div className="clients-container">
        {clients.map((client, idx) => (
          <div className="client-card" key={idx}>
            <img src={client.image} alt={client.name} className="client-img" />
            <p className="feedback">{client.feedback}</p>
            <h4 className="client-name">{client.name}</h4>
            <span className="client-role">{client.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
