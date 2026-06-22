import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Leetcode from "./components/Leetcode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";
import Timeline from "./components/Timeline";
function App() {
  return (
    <>
  <Navbar />
  <Hero />
  <Stats />
  <About />
  <Skills />

  <FeaturedProject />

  <Projects />

  <Timeline />

  <GithubStats />
  <Leetcode />
  <Contact />
  <Footer />
</>
  );
}

export default App;