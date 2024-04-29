import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/fichelogement">Fiche logement</Link>
      <Link to="/apropos">A propos</Link>
    </nav>
  )
}

export default Header
