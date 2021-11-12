import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";

class Circulo extends Component {
    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Área y Perímetro de un círculo</h1>
                    <p>Ingrese el radio para conocer el área y el perímetro del círculo</p>
                    <form>
                        <div>
                            <label>Radio: </label>
                            <input type="number" min={0}/>
                        </div>
                        <button>Mostrar</button>
                    </form>
                    <h4>Perímetro:</h4>
                    <h4>Área:</h4>
                    <Link to="/"><button>Volver al Menu</button></Link>
                </div>
            </div>
        );
    }
}

export default Circulo;