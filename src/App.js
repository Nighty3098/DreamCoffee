import './App.css';
import NavBar from './components/navbar';
import Welcome from './components/welcome';
import About from './components/about';
import Contacts from './components/contacts';
import Menu from './components/products';
import { PerformanceMonitor } from './utils/PerformanceMonitor';
import { LazyMotion, domAnimation } from 'framer-motion';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="App" style={{ padding: '0px', margin: '0px' }}>
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
        <NavBar />
        <Welcome />
        <Menu />
        <About />
        <Contacts />
      </div>
    </LazyMotion>
  );
}

export default App;
