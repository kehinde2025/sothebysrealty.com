import { useState, useEffect } from "react";

import property1 from "../assets/images/image.jpg";
import property2 from "../assets/images/fff.webp";
import property3 from "../assets/images/aaa.webp";
import property4 from "../assets/images/555.jpg";
import property5 from "../assets/images/download.jpg";

const properties = [
  {
    image: property1,
    location: "Texas",
    country: "United States",
    price: "$2,500,000",
  },
  {
    image: property2,
    location: "New York",
    country: "United States",
    price: "$4,800,000",
  },
  {
    image: property3,
    location: "London",
    country: "United Kingdom",
    price: "$3,200,000",
  },
  {
    image: property4,
    location: "Dubai",
    country: "United Arab Emirates",
    price: "$5,100,000",
  },
  {
    image: property5,
    location: "Paris",
    country: "France",
    price: "$3,900,000",
  },
];

export default function PropertySlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => (current + 1) % properties.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const property = properties[current];

  const nextProperty = () => {
    setCurrent((current + 1) % properties.length);
  };

  const previousProperty = () => {
    setCurrent(
      (current - 1 + properties.length) % properties.length
    );
  };

  return (
    <section className="property-slider">

      <div className="property-image">

        <img
          src={property.image}
          alt={property.location}
        />

        <div className="property-overlay"></div>

        <div className="property-info">

          <span className="property-location">
            {property.location}
          </span>

          <span className="property-country">
            {property.country}
          </span>

          <span className="property-price">
            {property.price}
          </span>

          <button type="button">
            View Listing
          </button>

        </div>

        <div className="property-controls">

          <button type="button" onClick={previousProperty}>
            ←
          </button>

          <span>
            {current + 1} / {properties.length}
          </span>

          <button type="button" onClick={nextProperty}>
            →
          </button>

        </div>

      </div>

    </section>
  );
}