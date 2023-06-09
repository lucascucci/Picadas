import { useState } from "react"
import '../../css/itemCount.css';


const ItemCount = ({data,onAdd}) => {

const [contador,setContador]= useState(1)


const botonAumento = () => {
    setContador(contador+1)
}
const botonDecremento = () => {
    contador > 0 ? setContador (contador -1):setContador(0) 
}
const agreProdu = () => {onAdd(contador)
alert("El producto se agrego al carrito")}

    return (
        <>
        <div className="contenedor">
        <h1> Cantidad:{contador}</h1>
        </div>
        <div className="contenedor">
            <button onClick={botonDecremento} className='botonDecremento'>-</button>
            <button onClick={botonAumento} className='botonAumento'>+</button>
            <button onClick={agreProdu}>Añadir al Carro</button>
        </div>
        </>
    )
}


export default ItemCount;