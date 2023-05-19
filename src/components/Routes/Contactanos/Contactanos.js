import "../../../css/contactanos.css";
import { Link } from "react-router-dom";
import Ubi from "../../../assets/ubicacion.png";


const Contactanos = () => {
    return (
        <div className="contacto">
            <h1>Informacion de contacto.</h1>
            <h1>Dejanos un mensaje y nos pondremos en contacto.</h1>
            <br></br>
            <br></br>
            <Link to={`/form`}>
                <button>Mensaje</button>
            </Link>
            <h2>¿Dónde nos encontramos?</h2>
            <br></br>
            <br></br>
                <div className="imgg">
                    <img className="ubi" src={Ubi} alt={Ubi}/>
                </div>
        </div>
    );
};

export default Contactanos;
