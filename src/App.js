import Calculate from "./components/Calculate";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Market from "./components/Market";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import WhyCrappo from "./components/WhyCrappo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <WhyCrappo/>
      <Calculate/>
      <Market/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
