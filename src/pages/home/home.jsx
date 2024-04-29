import './home.css'
import Card from '../../components/Card/Card'

function Home() {
  return (
    <main className="main">
      <section className="main__titre">
        <img src="./src/assets/BackgroundHome.png" />
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <div id="cards">
        <Card />
      </div>
    </main>
  )
}

export default Home
