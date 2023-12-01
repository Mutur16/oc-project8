import Banner from '../../components/Banner'
import CardsContainer from '../../components/CardContainer'

import HomeBannerImg from '../../assets/home-banner.png'

function Home() {
    return (
        <main>
            <Banner
                img={HomeBannerImg}
                alt="Image"
                text="Chez vous, 
partout et ailleurs"
            />
            <CardsContainer />
        </main>
    )
}

export default Home
