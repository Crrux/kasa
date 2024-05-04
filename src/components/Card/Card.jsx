import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Card() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/database/database.json')
        const data = await response.json()
        setLogements(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="cards">
      {logements.length > 0 ? (
        logements.map((logement) => (
          <Link key={logement.id} to={`/fichelogement/${logement.id}`}>
            <article
              style={{
                backgroundImage: `url(${logement.cover})`,
                backgroundSize: 'cover',
              }}
              aria-label={logement.title}
            >
              <div className="cards__gradient">
                <h2>{logement.title}</h2>
              </div>
            </article>
          </Link>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default Card
