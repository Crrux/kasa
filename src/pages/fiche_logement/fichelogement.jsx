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
        const response = await fetch('../src/database.json')
        const data = await response.json()
        setLogements(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    dataLogement()
  }, [])
  let ficheLogement = getLogement(id, logements)
  return (
    <main>
      <img src={ficheLogement.cover}></img>
      <div>
        <h1>{ficheLogement.title}</h1>
        <h2>{ficheLogement.location}</h2>
      </div>
      <div></div>
    </main>
  )
}

export default Fiche
