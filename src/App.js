import "./App.css";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
