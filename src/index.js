import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss';
import Accueil from './pages/index';
import Apropos from './pages/Apropos';
import Erreur404 from './pages/Erreur';
import Logement from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

