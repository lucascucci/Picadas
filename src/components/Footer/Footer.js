import { Link } from 'react-router-dom';
import '../../css/footer.css';


const Footer = () => {


    return (
        <>
            <div className='footer'>
                <h3>Contacto / Tel:54-1160590732</h3>
                <h5>Ubicacion: Av.Saenz Peña 2315</h5>
                <h5>Canales de contacto</h5>
                <div>
                    <ul className='ulListaRedes'>
                        <Link to={'https://www.facebook.com/'}><li className='listaRedes'><i className="fa-brands fa-facebook"></i></li></Link>
                        <Link to={'https://www.instagram.com/'}><li className='listaRedes'><i className="fa-brands fa-instagram"></i></li></Link>
                        <Link to={'https://www.twitter.com/'}><li className='listaRedes'><i className="fa-brands fa-twitter"></i></li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;