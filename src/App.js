import HeroesSection from "./components/HeroesSection";
import "./css/main.css"
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";

import jsImg from "./assets/images/skills/js-img.png"
import reactImg from "./assets/images/skills/react-img.png"
import cssImg from "./assets/images/skills/css-img.png"
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroesSection />
      <Skill isButton={false} img={jsImg} />
      <About />
      <Skill isButton={false} img={reactImg}  />
      <Portfolio />
      <Skill isButton={true} img={cssImg} content="DOWNLOAD CV"  />
      <Testimonial />
      <Skill isButton={false} img={cssImg}  />
      <Footer />
    </div>
  );
}

export default App;
