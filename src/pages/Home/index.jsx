import Banner from '../../components/Banner/index'
import HomeBannerImg from '../../assets/home-banner.png'

function Home() {
    return (
        <main>
            <Banner img={HomeBannerImg} alt="Image" text="Chez vous, 
partout et ailleurs" />
        </main>
    )
}

export default Home
