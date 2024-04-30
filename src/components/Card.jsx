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
    <div id="cards">
      {logements.length > 0 ? (
        logements.map((logement) => (
          <Link key={logement.id} to={`/fichelogement/${logement.id}`}>
            <article
              style={{
                backgroundImage: `url(${logement.cover})`,
                backgroundSize: 'cover',
              }}
            >
              {' '}
              {/* Add a unique key for each item */}
              <h2>{logement.title}</h2>
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
