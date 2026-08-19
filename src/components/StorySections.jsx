import storyImage from "../assets/images/imagereader.webp";

export default function StorySection() {
  return (
    <section className="story-section">

      <div className="story-content">

        <h2>
          Sotheby’s International Realty, the one for an
          exceptional home and life.
        </h2>

        <p>
          Built on centuries of tradition and dedicated to
          innovating the luxury real estate industry,
          Sotheby's International Realty offers transformative
          experiences through a global network of exceptional
          agents.
        </p>

      </div>

      <div className="story-image">
        <img
          src={storyImage}
          alt="Luxury property"
        />
      </div>

    </section>
  );
}