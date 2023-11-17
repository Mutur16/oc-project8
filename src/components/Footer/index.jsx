import './footer.css'
import LogoBlack from '../../assets/logo-black.png'

function Footer() {
    return (
        <footer>
            <img
                src={LogoBlack}
                alt="Logo Kasa noir et blanc"
                className="logo-black"
            />
            <p className="credits">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
