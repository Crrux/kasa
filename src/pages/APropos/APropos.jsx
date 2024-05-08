import Banner from '../../components/Banner/Banner'
import bannerImg from '/assets/BackgroundBannerAPropos.jpeg'
import Collapsible from '../../components/Collapsible/Collapsible'

function APropos() {
  return (
    <main className="APropos">
      <Banner img={bannerImg} />
      <div className="APropos-deroulant">
        <Collapsible
          titre={'Fiabilité'}
          string={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
          }
          radiusAnimation={true}
        ></Collapsible>
        <Collapsible
          titre={'Respect'}
          string={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          }
          radiusAnimation={true}
        ></Collapsible>
        <Collapsible
          titre={'Service'}
          string={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          }
          radiusAnimation={true}
        ></Collapsible>
        <Collapsible
          titre={'Sécurité'}
          string={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
          radiusAnimation={true}
        ></Collapsible>
      </div>
    </main>
  )
}

export default APropos
