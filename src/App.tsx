import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Instructors from './pages/Instructors';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Privacidad from './pages/Privacidad';
import AvisoLegal from './pages/AvisoLegal';
import Condiciones from './pages/Condiciones';
import Admin from './pages/Admin';
import CookieConsentPopup from './components/CookieConsentPopup';
import Cookies from './pages/Cookies';
import Dashboard from './pages/Dashboard';
import Socios from './pages/Socios';
import Registros from './pages/Registros';
import ProtectedRoute from './components/admin/ProtectedRoute';
import LoginForm from './components/admin/LoginForm';

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/condiciones" element={<Condiciones />} />
            <Route path="/admin/login" element={<LoginForm onLoginSuccess={() => window.location.replace('/admin')} />} />
            <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin/socios/*" element={<ProtectedRoute><Socios /></ProtectedRoute>} />
            <Route path="/admin/registros" element={<ProtectedRoute><Registros /></ProtectedRoute>} />
          </Routes>
        </main>
        <CookieConsentPopup />
        <Footer />
      </div>
    </Router>
  );
}

export default App;