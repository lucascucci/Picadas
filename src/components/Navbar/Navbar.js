import '../../css/navbar.css';
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        <>
            <nav>
                <ul className='barra'>
                    <CartWidget />
                    <Link to={'/item'}><li>Picadas y Cervezas</li></Link>
                    <Link to={'/Envios'}><li>Envios</li></Link>
                    <Link to={'/contacto'}><li>Contactanos</li></Link>
                    <Link className='casa' to={'/'}><span class="material-symbols-rounded">home</span></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;

