import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <img src="LogoKasa.png"></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
      </nav>
    </header>
  )
}
