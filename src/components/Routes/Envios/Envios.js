
import '../../../css/envios.css';
import { Link } from 'react-router-dom';
import Ship from "../../../assets/ship.png";

const Envios = () => {

    return (
        <div className='envio'>
            <div>
                    <img className="ubi" src={Ship} alt={Ship}/>
            </div>
            <text>
                ¡ Obtén hasta 70% de descuento en el envío de tus paquetes.
                Descubre cómo hacer crecer tu negocio enviando a todo Argentina usando guías prepagadas desde una misma
                plataforma mientras ahorras dinero !
            </text>
            <br></br>
            <Link to={`/form`}><button> Obtén cupon </button></Link>
        </div>
    )

}

export default Envios;