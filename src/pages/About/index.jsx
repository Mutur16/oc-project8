import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import AboutBannerImg from '../../assets/about-banner.png'
import './about.scss'

function About() {
    return (
        <main>
            <Banner img={AboutBannerImg} alt="Bannière de la page à propos" />
            <div className="collapse">
                <Collapse
                    label={'Fiabilité'}
                    text={
                        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes.'
                    }
                />
                <Collapse
                    label={'Respect'}
                    text={
                        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbations du voisinage entraînera une exclusion de notre plateforme.'
                    }
                />
                <Collapse
                    label={'Service'}
                    text={
                        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbations du voisinage entraînera une exclusion de notre plateforme.'
                    }
                />
                <Collapse
                    label={'Sécurité'}
                    text={
                        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    }
                />
            </div>
        </main>
    )
}

export default About
