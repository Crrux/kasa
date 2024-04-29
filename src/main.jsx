import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Fiche from './pages/fiche_logement/fichelogement.jsx'
import Notfound from './pages/NotFound/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichelogement" element={<Fiche />} />
        <Route path="/404NotFound" element={<Notfound />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
