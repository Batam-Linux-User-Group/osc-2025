import CompetitionSection from "../components/CompetitionSection";
import Header from "../components/Header";
import Navbar from "../components/LandingPage/Navbar";
import Home from "../components/LandingPage/Home";
import About from "../components/LandingPage/About";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home title="Bangun Masa Depan Bersama, Mulai dari " />
      <About tema="Open Source Arena: Battle of Brilliant Minds" />
    </div>
  );
};

// #423E40 => abu abu

export default LandingPage;
