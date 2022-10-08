import "./App.css";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

function App() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
