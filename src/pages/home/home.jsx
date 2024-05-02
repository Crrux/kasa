import Card from '../../components/Card/Card'
import bannerImg from '/assets/BackgroundHome.png'

function Home() {
  return (
    <main className="main">
      <section className="main__titre">
        <img src={bannerImg} />
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <Card />
    </main>
  )
}

export default Home
