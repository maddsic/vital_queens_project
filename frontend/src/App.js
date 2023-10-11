// import About from "./pages/About/About";
// import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import "./index.css";
import Services from "./components/Services";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Dishes from "./components/Dishes";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="app bg-white font-blink">
      <Header />
      {/* <About /> */}
      <Hero />
      <div className="main__content ">
        <Services />
        <Story />
      </div>
      <Menu />
      <Dishes />
      <Banner />
      <Gallery />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
