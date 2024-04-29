import './error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className="mainError">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas</p>
      <Link to="/">Retourner sur la page d&apos;acceuil</Link>
    </main>
  )
}

export default Error
