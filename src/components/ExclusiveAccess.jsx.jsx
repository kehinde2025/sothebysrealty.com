import exclusiveImage from "../assets/images/bbb.webp";
import inspiredImage from "../assets/images/bbb.webp";

export default function ExclusiveAccess() {
  return (
    <section className="exclusive-section">

      {/* EXCLUSIVE ACCESS */}

      <div className="exclusive-content">

        <div className="exclusive-image">
          <img
            src={exclusiveImage}
            alt="Exclusive Access"
          />
        </div>

        <div className="exclusive-text">

          <p className="exclusive-label">
            Exclusive Access
          </p>

          <h2>
            Exclusive Access to Local Experts
          </h2>

          <p>
            With experts in every part of the world, we are local
            everywhere, allowing us to walk alongside our clients
            at every stage of their journey. With innovative
            technology and unrivaled service, we ensure that your
            home is connected with buyers, locally and worldwide.
          </p>

          <button type="button">
            Sell With Us
          </button>

        </div>

      </div>


      {/* GET INSPIRED */}

      <div className="inspired-content">

        <div className="inspired-image">
          <img
            src={inspiredImage}
            alt="Get Inspired"
          />
        </div>

        <div className="inspired-text">

          <h3>
            Get Inspired
          </h3>

          <p>
            For those who seek an exceptional home and life,
            browse our video series catalogue.
          </p>

          <button type="button">
            View All
          </button>

        </div>

      </div>

    </section>
  );
}