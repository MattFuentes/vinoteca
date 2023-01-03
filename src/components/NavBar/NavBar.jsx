import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";


export const NavBar = ()=>{

    return(
        <nav className="navegacion">
            <div className="list">
                <Link to="/">Inicio</Link>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/tinto"> Tintos</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/blanco"> Blancos</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/rosado"> Rosados</NavLink>
            </div>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
        </nav>
    )
}