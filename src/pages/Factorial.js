import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";

class Factorial extends Component {
    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Factorial</h1>
                    <p>Ingrese el número del que deseas conocer su factorial</p>
                    <form>
                        <input type="number" min={0}/>
                        <button>Mostrar</button>
                    </form>
                    <h4>Aquí ira el resultado</h4>
                    <div className="buttonC">
                        <Link to="/"><button>Volver al Menu</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Factorial;