import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";

const {url} = require("../global")

class Fibonacci extends Component {

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
        let data = {numero: this.state.numero};
        fetch(url + "/fibonacci", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
            .then((response) =>
                response.json().then((json) => {
                    console.log("Respuesta", json.nums)
                    if (json.status) {
                        this.setState({
                            ...this.state,
                            response: json.nums,
                        });
                    } else {
                        this.setState({
                            ...this.state,
                            response: json,
                        });
                    }
                })
            )
            .catch((fail) => console.log(fail));
    }

    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Fibonacci</h1>
                    <p>Ingrese la cantidad de números de la serie de Fibonacci que quiere ver</p>

                    <form onSubmit={this.handleSubmit}>
                        <input name="numero" onChange={this.handleChange} value={this.state.numero} type="number"
                               min={0} placeholder={"Ejemplo: 5"}/>
                        <button type="submit">Mostrar</button>
                    </form>
                    <br/>
                    <textarea value={this.state.response} contentEditable={"false"} readOnly={true} placeholder={ "= 1,1,2,3,5"}/>
                    <br/>
                    <Link to="/">
                        <button>Volver al Menu</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Fibonacci;