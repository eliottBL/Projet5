import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import Accueil from './components/pages/Accueil/index';
import Apropos from './components/pages/A Propos/Apropos';
import Erreur404 from './components/pages/Erreur/Erreur';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/erreur404" element={<Erreur404 />} />
    </Routes>
  </Router>
</React.StrictMode>,
);

