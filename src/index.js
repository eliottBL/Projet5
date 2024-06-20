import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss';
import Accueil from './pages/index';
import Apropos from './pages/Apropos';
import Erreur404 from './pages/Erreur';
import Logement from './pages/Logement';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='container'>
        <div className='sub-container'>
          <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Erreur404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>


  </React.StrictMode >,
);

