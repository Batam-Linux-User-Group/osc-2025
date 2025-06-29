import CompetitionSection from "../components/CompetitionSection";
import About from "../components/LandingPage/About";
import Home from "../components/LandingPage/Home";
import Navbar from "../components/LandingPage/Navbar";
import TimelineSection from "../components/TimelineSection";
import Footer from "../components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home title="Bangun Masa Depan Bersama, Mulai dari " />
      <About tema="Open Source Arena: Battle of Brilliant Minds" />
      <CompetitionSection />
      <TimelineSection/>
      <Footer/>
    </div>
  );
};

// #423E40 => abu abu

export default LandingPage;
