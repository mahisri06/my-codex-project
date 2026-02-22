import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Metrics from './components/Metrics';
import RiskSimulator from './components/RiskSimulator';
import Lifecycle from './components/Lifecycle';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Philosophy />
        <Metrics />
        <RiskSimulator />
        <Lifecycle />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
