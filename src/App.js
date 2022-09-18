import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Qualifications from "./components/Qualifications/Qualifications";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Testimonial from "./components/Testimonial/Testimonial";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Qualifications />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
