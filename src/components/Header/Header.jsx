import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
      <img src="src/assets/LogoKasa.png"></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
