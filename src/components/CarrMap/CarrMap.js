import '../../css/carrMap.css';
import { Link } from 'react-router-dom';


const CarrMap = ({ sacarProductos, eliminarIndividual, vaciarCarrito, precioTotal, cart }) => {

    return (
        <div>
            {
                cart.map((data, indice) =>
                    <div className="contenedorOri" key={indice}>
                        <div>
                            <h1 className="titulo"> {data.titulo}</h1>
                            <p className='detalle'>{data.detalle}</p>
                            <img className='imagen' src={data.imagen} alt="trago" />
                            <br></br>
                            <span className="value">Valor $ :{data.precio}</span>
                            <br></br>
                            <h3>Cantidad: {data.cantidad}</h3>
                            <div >
                                <button className="" disable={data.cantidad <= 0 && sacarProductos(data.id)} onClick={() => eliminarIndividual(data.id)}>Eliminar Individual</button>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='vaciar'>
                <button className="vaciarCarro" onClick={vaciarCarrito}>Vaciar carrito</button>
                <h2 className="precioTotal">Total:$ {precioTotal()}</h2>
                <Link to={`/form`}><button className="continuar-compra">Continuar compra</button></Link>
                <div>
                    <span class="material-symbols-outlined">
                        output
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CarrMap;

