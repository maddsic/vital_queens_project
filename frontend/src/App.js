import About from "./pages/About/About";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
   return (
      <div className="app">
         <Header />
         <About />
      </div>
   );
}

export default App;
