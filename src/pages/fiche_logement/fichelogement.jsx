import { useParams } from 'react-router-dom'

function Fiche() {
  let { id } = useParams()
  return (
    <main>
      <h1>fiche logement</h1>
      <p>{id}</p>
    </main>
  )
}

export default Fiche
