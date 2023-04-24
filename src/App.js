import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Certification from './components/certifications';
import Experiences from './components/experiences';
import Formations from './components/formations';
import ProfileImage from "./components/imageprofil";
import Projets from "./components/projets"
import Accueil from "./components/accueil"
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <ProfileImage />
          <h1>Oussama Bouhamidi</h1>
          <h2>computer engineering student</h2>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-link">
                Expériences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certification" className="nav-link">
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
        </div>

        {/* Pied de page */}
        <footer className="footer">
          <p>Email : <a class="link-opacity-100" rel="noopener" target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHLzXTRtsVXNCjpDkmnLzWhhScjrmCTFfCTJWnZCFWDwXsCNhLvNDRMNTWvmFZPWlq">OussamaBouhamidi2000@gmail.com</a></p>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;