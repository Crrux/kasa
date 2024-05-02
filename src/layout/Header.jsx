import { Link } from 'react-router-dom'
import logoHeader from '/assets/LogoHeader.png'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoHeader} alt="Logo Kasa"></img>
      </Link>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
