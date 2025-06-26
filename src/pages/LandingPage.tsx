import CompetitionSection from "../components/CompetitionSection";
import About from "../components/LandingPage/About";
import Home from "../components/LandingPage/Home";
import Navbar from "../components/LandingPage/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home title="Bangun Masa Depan Bersama, Mulai dari " />
      <About tema="Open Source Arena: Battle of Brilliant Minds" />
      <CompetitionSection />
    </div>
  );
};

// #423E40 => abu abu

export default LandingPage;
