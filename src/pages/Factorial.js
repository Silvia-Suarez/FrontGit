import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";

const {url} = require("../global")

class Factorial extends Component {
    state = {
        numero: "",
        response: ""
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado")
        let data = {numero: this.state.numero}
        fetch(url + "/factorial", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
            .then((response) =>
                response.json().then((json) => {
                    console.log("Respuesta", json)
                    if (json.status) {
                        this.setState({
                            ...this.state,
                            response: json.fact
                        });
                    } else {
                        this.setState({
                            ...this.state,
                            response: json
                        });
                    }
                })
            )
            .catch((fail)=> console.log(fail));
    }

    render() {
        return (
            <div className="container">
                <div className="fondo">
                    <h1>Factorial</h1>
                    <p>Ingrese el número del que deseas conocer su factorial</p>
                    <form onSubmit={this.handleSubmit}>
                        <input name="numero" onChange={this.handleChange} value={this.state.numero}
                               type="number" min={0} max={170}/>
                        <button type="submit">Mostrar</button>
                    </form>
                    <h4>Factorial de {this.state.numero} = {this.state.response}</h4>
                    <h3>{this.state.response}</h3>
                    <div className="opciones">
                        <Link to="/">
                            <button>Volver al Menu</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Factorial;