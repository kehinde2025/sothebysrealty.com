import location1 from "../assets/images/ll.webp";
import location2 from "../assets/images/mm.webp";
import location3 from "../assets/images/nn.webp";

const locations = [
  {
    image: location1,
    title: "Extraordinary Living",
    text: "Stories and Market Insights",
  },
  {
    image: location2,
    title: "Luxury Outlook",
    text: "An ambitious exploration into high-end residential markets across the globe.",
  },
  {
    image: location3,
    title: "View Homes, From the Comfort of Yours",
    text: "Experience luxury homes like never before, all from the comfort of yours.",
  },
];

export default function ExceptionalLocations() {
  return (
    <section className="exceptional-locations">

      <div className="exceptional-heading">
        <p>Explore More</p>

        <h2>
          Exceptional Locations.
          <br />
          Extraordinary Living.
        </h2>
      </div>

      <div className="location-grid">

        {locations.map((location, index) => (
          <article className="location-card" key={index}>

            <img
              src={location.image}
              alt={location.title}
            />

            <div className="location-overlay"></div>

            <div className="location-content">

              <h3>
                {location.title}
              </h3>

              <p>
                {location.text}
              </p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}