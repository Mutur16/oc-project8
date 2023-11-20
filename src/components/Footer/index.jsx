import './footer.scss'
import LogoWhite from '../../assets/logo-white.png'

function Footer() {
    return (
        <footer>
            <img
                src={LogoWhite}
                alt="Logo Kasa blanc"
            />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
