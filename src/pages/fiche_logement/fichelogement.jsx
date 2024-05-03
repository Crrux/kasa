import { useParams, redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Caroussel from '../../components/caroussel/Caroussel'
import Collapsible from '../../components/Collapsible/Collapsible'

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
          <div className="info-logement">
            <div className="info-logement-gauche">
              <div>
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
              </div>
              <div className="info-logement-gauche-tags"></div>
            </div>
            <div className="info-logement-droit">
              <div className="info-logement-droit-host">
                <p>{logement.host?.name || 'Chargement...'}</p>
                <img src={logement.host?.picture || ''} />
              </div>
              <div className="info-logement-droit-hostrating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
          </div>

          <div className="zoneDeroulant">
            <Collapsible
              titre={'Description'}
              string={logement.description}
            ></Collapsible>
            <Collapsible
              titre={'Equipments'}
              text={logement.equipments}
            ></Collapsible>
          </div>
        </>
      ) : (
        <div>Chargement en cours...</div>
      )}
    </main>
  )
}

export default Fiche
