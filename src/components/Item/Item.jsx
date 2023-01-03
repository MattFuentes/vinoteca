import './Item.css'
import {Link} from "react-router-dom";


export const Item = ({item}) =>{
    return(
        <div className="productCard">
            <img src={item.pictureURL} alt={item.nombre} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='buttonSeeAll'>Ver detalle...</button>
            </Link>
        </div>
    )
}