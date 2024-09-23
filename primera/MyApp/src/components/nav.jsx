import {Boton} from './boton'
import {Logo}  from './logo'
import {Li}  from './list'
import logoImage from '../assets/logo.png';

function muestra(){
    alert("Carrito en Trabajo");
    console.log("funciona");
}

export const Nav=() =>{
    return <>
    <nav className="nav">
        <Logo imagen={logoImage} alt="Logo de E-C"/>
        <div className="lista">
            <ul>
                <Li texto="Home" link="../App.jsx"/>
                <Li texto="Compra" link="../App.jsx"/>
                <Li texto="Venta" link="../App.jsx"/>
                <Li texto="Otros" link="../App.jsx"/>
                <Boton texto="Carrito" color="red" onClick={muestra}/>
            </ul>
        </div>
    </nav>
    </>
}