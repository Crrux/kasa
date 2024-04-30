import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/src/assets/LogoHeader.png" alt="Logo Kasa"></img>
      </Link>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
