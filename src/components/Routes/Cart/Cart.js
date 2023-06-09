import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import '../../../css/cart.css';
import CarrMap from "../../CarrMap/CarrMap";
import Vacio from "../../../assets/empty.png";

const Cart = () => {
const {
        sacarProductos,
        eliminarIndividual,
        vaciarCarrito,
        precioTotal,
        cart,
    } = useCartContext();



    return (
        <>
            {
                cart.length === 0 ?
                
                <div className="carriVacio">
                    <span>El carrito esta vacio</span>
                        <div>
                        <img className="imaVacio" src={Vacio} alt={Vacio}/>
                        </div>
                    <Link to={`/`}><button className="">Volver al inicio</button></Link>
                </div>
                :
                <CarrMap precioTotal={precioTotal} vaciarCarrito={vaciarCarrito} eliminarIndividual={eliminarIndividual} sacarProductos={sacarProductos} cart={cart}/>
            }
        </>
    )
}


export default Cart;