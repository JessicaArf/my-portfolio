import { About } from './components/about/About';
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./components/home/Home";
import { Resume } from "./components/resume/Resume";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from './components/contact/Contact';
import './App.css';

export function App() {
  return (
    <>
       <Sidebar />
       <main className="main">
       <Home />
       <About />
       <Resume />
       <Portfolio />
       <Contact/>
       </main>
       </>
  );
}


