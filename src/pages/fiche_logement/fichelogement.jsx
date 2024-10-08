import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Collapsible from '../../components/Collapsible/Collapsible'
import Rating from '../../components/Rating/Rating'
import Slideshow from '../../components/Slideshow/Slideshow.jsx'

function Fiche() {
  let { id } = useParams()
  const [logement, setLogements] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const dataLogement = async () => {
      let logementNotFound = false
      try {
        const response = await fetch('/database/database.json')
        const data = await response.json()
        const logement = data.find((logement) => logement.id === id)
        if (logement) {
          setLogements(logement)
        } else {
          logementNotFound = true
          throw new Error('Logement not found')
        }
      } catch (error) {
        if (logementNotFound) {
          navigate(`/LogementNotFound-${id}`)
        }
      }
    }
    dataLogement()
  }, [logement, id, navigate])

  return (
    <main id="fichelogement">
      {logement ? (
        <>
          {logement.pictures ? (
            <Slideshow data={logement.pictures}></Slideshow>
          ) : (
            ''
          )}
          <section className="info-logement">
            <div className="info-logement-gauche">
              <div>
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
              </div>
              <div className="info-logement-gauche-tagscontainer">
                {logement.tags ? (
                  <>
                    {' '}
                    {logement.tags.map((tags) => (
                      <p
                        key={tags}
                        className="info-logement-gauche-tagscontainer-tags"
                      >
                        {tags}
                      </p>
                    ))}
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="info-logement-droit">
              <div className="info-logement-droit-host">
                <p>{logement.host?.name || 'Chargement...'}</p>
                <img src={logement.host?.picture || ''} alt="Photo de l'hôte" />
              </div>
              <div className="info-logement-droit-hostrating">
                <Rating stars={Number(logement.rating)}></Rating>
              </div>
            </div>
          </section>

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
