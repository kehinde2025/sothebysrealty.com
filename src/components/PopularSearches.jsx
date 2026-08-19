const cities = [
  "New York",
  "Miami",
  "Washington",
  "Sydney",
  "London",
  "Los Angeles",
];

const lifestyles = [
  "Waterfront",
  "Metropolitan",
  "Country Living",
  "Historic",
  "Ski",
  "Beachfront",
];

const destinations = [
  "Africa",
  "Canada",
  "Asia",
  "Europe",
  "Caribbean",
  "Middle East",
];

export default function PopularSearches() {
  return (
    <section className="popular-section">

      {/* POPULAR CITY SEARCHES */}
      <div className="popular-group">
        <h2>Popular City Searches</h2>

        <p>Find homes in these popular cities</p>

        <div className="popular-links">
          {cities.map((city) => (
            <a href="#" key={city}>
              {city}
            </a>
          ))}
        </div>

        <a href="#" className="see-all">
          See all cities
        </a>
      </div>


      {/* POPULAR LIFESTYLES */}
      <div className="popular-group">
        <h2>Popular Lifestyles</h2>

        <p>Find homes by these popular lifestyles</p>

        <div className="popular-links">
          {lifestyles.map((lifestyle) => (
            <a href="#" key={lifestyle}>
              {lifestyle}
            </a>
          ))}
        </div>

        <a href="#" className="see-all">
          See all lifestyles
        </a>
      </div>


      {/* POPULAR DESTINATIONS */}
      <div className="popular-group">
        <h2>Popular Destinations</h2>

        <p>Find homes in these popular destinations</p>

        <div className="popular-links">
          {destinations.map((destination) => (
            <a href="#" key={destination}>
              {destination}
            </a>
          ))}
        </div>

        <a href="#" className="see-all">
          See all destinations
        </a>
      </div>


      {/* ONE WHITE LINE */}
      <div className="popular-divider"></div>


      {/* PARAGRAPH */}
      <div className="popular-feature-text">
        <h3>About Sotheby’s International Realty Affiliates LLC</h3>
        <p>
          Founded in 1976 to provide independent brokerages with a powerful marketing and referral program for luxury listings, the Sotheby's International Realty network was designed to connect the finest independent real estate companies to the most prestigious clientele in the world. Sotheby's International Realty Affiliates LLC is a subsidiary of Anywhere Real Estate Inc. (NYSE: HOUS), a global leader in real estate franchising and provider of real estate brokerage, relocation and settlement services. In February 2004, Realogy entered into a long-term strategic alliance with Sotheby's, the operator of the auction house. The agreement provided for the licensing of the Sotheby's International Realty name and the development of a full franchise system. Affiliations in the system are granted only to brokerages and individuals meeting strict qualifications. Sotheby's International Realty Affiliates LLC supports its affiliates with a host of operational, marketing, recruiting, educational and business development resources. Franchise affiliates also benefit from an association with the venerable Sotheby's auction house, established in 1744.
        </p>
      </div>

    </section>
  );
}