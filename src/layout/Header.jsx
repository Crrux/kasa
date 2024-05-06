import { Link, useLocation } from 'react-router-dom'
import logoHeader from '/assets/LogoHeader.png'

function Header() {
  const location = useLocation()
  return (
    <header>
      <Link to="/">
        <img src={logoHeader} alt="Logo Kasa"></img>
      </Link>

      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link
          to="/apropos"
          className={location.pathname === '/apropos' ? 'active' : ''}
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
