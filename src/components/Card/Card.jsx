import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Card() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../src/database.json')
        const data = await response.json()
        setLogements(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Link to={`/fichelogement/${logements.map((logement) => logement.id)}`}>
      <div id="cards">
        {logements.length > 0 ? (
          logements.map((logement) => (
            <article
              key={logement.id}
              style={{
                backgroundImage: `url(${logement.cover})`,
                backgroundSize: 'cover',
              }}
            >
              {' '}
              {/* Add a unique key for each item */}
              <h2>{logement.title}</h2>
            </article>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </Link>
  )
}

export default Card
