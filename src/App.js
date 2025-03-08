import "./App.css";
import NavBar from "./components/navbar";
import Welcome from "./components/welcome";
import About from "./components/about";
import Contacts from "./components/contacts";
import Menu from "./components/menu";
import { PerformanceMonitor } from './utils/PerformanceMonitor';

function App() {
  return <div className="App" style={{ padding: "0px", margin: "0px" }}>
    {process.env.NODE_ENV === "development" && <PerformanceMonitor />}
    <NavBar />
    <Welcome />
    <Menu />
    <About />
    <Contacts />
  </div>;
}

export default App;
