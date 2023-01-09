import About from "./components/about/About";
import Carrossel from "./components/carrossel/Carrossel";
import Filter from "./components/filter/Filter";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";
import Team from "./components/team/Team";

function App() {
  return (
    <div>
      <Navbar/>
      <Carrossel/>
      <Filter/>
      <Projects/>
      <About/>
      <Team/>
    </div>
  );
}

export default App;
