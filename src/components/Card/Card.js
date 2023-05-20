import '../../css/card.css';
import { Link } from 'react-router-dom';

const Card = ({data})=> {

    return (
        
        <div className='itemContainer'>
            <h1> {data.titulo}</h1>
            <h3 className='textot'>Ingredientes de la picada</h3>
            <h3 className=' texto'>{data.detalle}</h3>
            <img className="img" src={data.imagen} alt="trago"/>
            <h4 className='precio'>Precio: {data.precio}$</h4>
                <div className=''>
                    <Link to={`/item/${data.id}`}><button className='boton'>Ver más</button></Link>
                    <Link to={`/`}><button>Ir al Inicio</button></Link>
                </div>
                <br></br>
                <br></br>
        </div>
    )
}

export default Card;