import React from 'react'
import './whychoose.css'

function WhyChoose() {
  const items = [
    {
      icon: "🏠",
      title: "Potential ROI",
      description:
        "Whether you are looking to buy a new property or renovate your current home for sale, we will walk you through potential returns for projects.",
    },
    {
      icon: "🎨",
      title: "Design",
      description:
        "Our in-house design services help you choose the perfect options and coordinate contractors to bring your vision to life.",
    },
    {
      icon: "💰",
      title: "Marketing",
      description:
        "Creating materials, content and promos as a part of a strong marketing strategy that supports your success.",
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="underline" />
      <div className="cards-container">
        {items.map((item, index) => (
          <div className="choose-card" key={index}>
            <div className="icon-circle">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose