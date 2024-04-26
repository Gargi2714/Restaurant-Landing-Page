import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";

function App() {

  return (
    <div >
      <Navbar/>
      <Home />
      <About/>
      <Menu/>
    </div>
  );
}

export default App;
