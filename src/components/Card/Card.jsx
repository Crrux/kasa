import { useState, useEffect } from 'react'

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
          <article key={logement.id}>
            {' '}
            {/* Add a unique key for each item */}
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </article>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default Card
