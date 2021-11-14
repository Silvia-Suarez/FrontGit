import React,{Component} from "react";
import '../assets/css/Navegador.css';
import {Link} from "react-router-dom"
class Navegador extends Component{
    render(){
        return(
            <div className="container">
                <div className="fondo">
                    <h1>seleccione la acción deseada</h1>
                    <div className="opciones">
                        <Link to="/fibonacci"><button>Números Fibonacci</button></Link>
                        <Link to="/factorial"><button>Factorial de un Número</button></Link>
                        <Link to="/circulo"><button>Medidas del Círculo</button></Link>
                        <Link to="/triangulo"><button>Medidas del Triángulo</button></Link>
                        <Link to="/rectangulo"><button>Medidas del Rectángulo</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Navegador;