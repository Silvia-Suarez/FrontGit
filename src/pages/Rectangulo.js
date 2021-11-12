import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";

class Rectangulo extends Component {
    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Área y Perímetro de un rectángulo</h1>
                    <p>Ingrese la base y la altura para conocer el área y el perímetro del rectángulo</p>
                    <form>
                        <div>
                            <label>Base: </label>
                            <input type="number" min={0}/>
                        </div>
                        <div>
                            <label>Altura: </label>
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

export default Rectangulo;