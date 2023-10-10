import About from "./pages/About/About";
// import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import "./index.css";
import Services from "./components/Services";
import Story from "./components/Story";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="app bg-white">
      <Header />
      <About />
      <div className="max-w-7xl mx-auto lg:px-16">
        <Services />
        <Story />
      </div>
      <Menu />
    </div>
  );
}

export default App;
