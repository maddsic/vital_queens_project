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

function App() {
  return (
    <div className="app bg-white">
      <Header />
      {/* <About /> */}
      <div className="max-w-7xl mx-auto lg:px-16 font-blink">
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
