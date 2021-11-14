import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";
import {url} from "../global";

class Triangulo extends Component {
    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Área y Perímetro de un triángulo</h1>
                    <p>Ingrese los lados y la base para conocer el área y el perímetro del triángulo</p>
                    <form>
                        <div>
                            <label>Lado 1: </label>
                            <input type="number" min={0}/>
                        </div>
                        <div>
                            <label>Lado 2: </label>
                            <input type="number" min={0}/>
                        </div>
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

export default Triangulo;