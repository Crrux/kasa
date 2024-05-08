import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import bannerImg from '/assets/BackgroundBannerHome.png'

function Home() {
  return (
    <main className="main">
      <Banner
        img={bannerImg}
        text={'Chez vous, partout et ailleurs'}
        filter={true}
      />
      <Card />
    </main>
  )
}

export default Home
