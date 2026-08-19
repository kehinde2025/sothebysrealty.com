import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import PropertySlider from "./components/PropertySlider";
import StorySection from "./components/StorySections";
import ExclusiveAccess from "./components/ExclusiveAccess.jsx";
import ExceptionalLocations from "./components/ExceptionalLocations.jsx";
import PopularSearches from "./components/PopularSearches.jsx";
import Footer from "./components/Footer.jsx";
import RentalApplication from "./components/RentalApplication.jsx";

function App() {
  return (
    <>
      <Header />

      {/* Homepage sections will be added here */}
      <Hero />
      <PropertySlider />
      <StorySection />
      <OurStory />
      <ExclusiveAccess />
      <RentalApplication />
      <ExceptionalLocations />
      <PopularSearches />
      <Footer />
    </>
  );
}

export default App;