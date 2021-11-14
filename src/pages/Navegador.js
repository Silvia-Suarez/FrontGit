import React,{Component} from "react";
import '../assets/css/Navegador.css';
import {Link} from "react-router-dom"
class Navegador extends Component{
    render(){
        return(
            <div className="container">
                <div className="fondo">
                    <h1>CALCULATOR</h1>
                    <p>Seleccione la opción que requiera</p>
                    <div className="d-grid gap-2 col-10 mx-auto">
                        <Link to="/fibonacci">
                            <button type="button" class="btn btn-outline-dark">Números Fibonacci</button>
                        </Link>
                        <Link to="/factorial">
                            <button type="button" class="btn btn-outline-light">Factorial de un Número</button>
                        </Link>
                        <Link to="/circulo">
                            <button type="button" class="btn btn-outline-dark">Medidas del Círculo</button>
                        </Link>
                        <Link to="/rectangulo">
                            <button type="button" class="btn btn-outline-light">Medidas del Rectángulo</button>
                        </Link>
                        <Link to="/triangulo">
                            <button type="button" class="btn btn-outline-dark">Medidas del Triángulo</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Navegador;