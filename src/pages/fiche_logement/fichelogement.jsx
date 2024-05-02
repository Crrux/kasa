import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function getLogement(idLogement, logements) {
  let ficheLogement = []
  for (let i = 0; i < logements.length; i++) {
    if (logements[i].id === idLogement) {
      ficheLogement = logements[i]
    }
  }
  return ficheLogement
}

function Fiche() {
  let { id } = useParams()
  const [logements, setLogements] = useState([])

  useEffect(() => {
    const dataLogement = async () => {
      try {
        const response = await fetch('/database/database.json')
        const data = await response.json()
        /* data.filter() */
        setLogements(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        /*  Ici gérer la redirection vers la page erreur */
      }
    }
    dataLogement()
  }, [])

  let ficheLogement = getLogement(id, logements)
  let hostname = ''
  let srcPicture = ''
  if (ficheLogement.host) {
    hostname = ficheLogement.host.name
    srcPicture = ficheLogement.host.picture
  } else {
    hostname = 'Chargement...'
    srcPicture = ''
  }
  return (
    <main>
      <img src={ficheLogement.cover}></img>
      <div>
        <h1>{ficheLogement.title}</h1>
        <h2>{ficheLogement.location}</h2>
      </div>
      <div>
        <p>{hostname}</p>
        <img src={srcPicture} />
      </div>
    </main>
  )
}

export default Fiche
