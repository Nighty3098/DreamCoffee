import "./App.css";
import NavBar from "./components/navbar";
import Welcome from "./components/welcome";
import About from "./components/about";
import Contacts from "./components/contacts";

function App() {
  return <div className="App" style={{ padding: "0px", margin: "0px" }}>
    <NavBar />
    <Welcome />
    <About />
    <Contacts />
  </div>;
}

export default App;
