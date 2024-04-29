import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/home/home'
import Fiche from './pages/fiche_logement/fichelogement.jsx'
import APropos from './pages/APropos/APropos.jsx'
import Error from './pages/NotFound/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichelogement" element={<Fiche />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
