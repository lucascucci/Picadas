import "../../css/itemDetail.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
    const { agregarProducto } = useCartContext();

    const onAdd = (contador) => {
        agregarProducto(data, contador);
    };

    const mostrarAlerta = () => {
        ("Esta es una alerta");
    };

    return (
        <div className="detailContainer">
            <div>
                <span className="tituloDetalle">{data.titulo}</span>
                <h1>Precio: {data.precio}$</h1>
                <img className="img1" src={data.imagen} alt="trago" />
                <h5 className="detail">{data.detalle}</h5>
            </div>
            <br></br>
            <div>
                <ItemCount data={data} onAdd={onAdd} />
            </div>
            <br></br>
            <div className="">
                <Link to={`/item`}>
                    <button onClick={() => mostrarAlerta()} className="volverATragos">
                        {" "}
                        Volver a la lista
                    </button>
                </Link>
                <br />
                <Link to={`/Cart`}>
                    <button className="aCarrito"> ir a Carrito </button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;
