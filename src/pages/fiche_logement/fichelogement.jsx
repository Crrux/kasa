import { useParams, useNavigate, redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Collapsible from '../../components/Collapsible/Collapsible'
import Rating from '../../components/Rating/Rating'
import Carousel from '../../components/Caroussel/Caroussel'

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
          throw new Error('Logement not found') // Create and throw an error
        }
      } catch (error) {
        if (logementNotFound) {
          // return redirect('/404')
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
            <Carousel data={logement.pictures}></Carousel>
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
                <img src={logement.host?.picture || ''} />
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
