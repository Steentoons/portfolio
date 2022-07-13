import HeroesSection from "./components/HeroesSection";
import "./css/main.css"
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroesSection />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
