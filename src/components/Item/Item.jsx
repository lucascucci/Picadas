import Card from '../Card/Card';
import '../../css/item.css';



const Item = ({data}) => {
    return(
    <>
        <div className='contenedor-carta'>
            <Card data={data}/>
            <div>
            </div>
        </div>
    </>
    )
}

export default Item;