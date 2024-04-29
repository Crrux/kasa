import './card.css'

function Card() {
  async function fetchjson() {
    const response = await fetch('../src/database.json')
    const logements = await response.json()
    console.log(logements[0])
    return (
      <article>
        <img src={logements[0].cover}></img>
        <h2>{logements[0].title}</h2>
      </article>
    )
  }
  fetchjson()
}

export default Card
