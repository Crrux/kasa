import { useParams, redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Caroussel from '../../components/caroussel/Caroussel'

function Fiche() {
  let { id } = useParams()
  const [logement, setLogements] = useState([])

  useEffect(() => {
    const dataLogement = async () => {
      try {
        const response = await fetch('/database/database.json')
        const data = await response.json()
        const logement = data.find((logement) => logement.id === id)
        setLogements(logement)
      } catch (error) {
        console.error('Error fetching data:', error)
        redirect('/')
        /*  Ici gérer la redirection vers la page erreur */
      }
    }
    dataLogement()
  }, [logement, id])

  return (
    <main id="fichelogement">
      <Caroussel images={logement.pictures} />
      {logement ? (
        <>
          <div>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          <div>
            <p>{logement.host?.name || 'Chargement...'}</p>
            <img src={logement.host?.picture || ''} />
          </div>
        </>
      ) : (
        <div>Chargement en cours...</div>
      )}
    </main>
  )
}

export default Fiche
