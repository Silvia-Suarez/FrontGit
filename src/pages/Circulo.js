import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";
import {url} from "../global";

class Circulo extends Component {
    state = {
        radio: "",
        per: "",
        area:""
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado")
        let data = {radio: this.state.radio}
        fetch(url + "/circulo", {
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
                            per: json.per,
                            area: json.area
                        });
                    } else {
                        this.setState({
                            ...this.state,
                            response: json
                        });
                    }
                })
            )
            .catch((fail) => console.log(fail));
    }

    render() {
        return (
            <div className="container">
                <div className="fondo">
                    <h1>El Círculo</h1>
                    <p>Ingrese el radio para conocer el área y el perímetro del círculo</p>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Radio: </label>
                            <input name="radio" onChange={this.handleChange} value={this.state.radio} type="number" min={0} placeholder={"Ingrese el radio del círculo"}/>
                        </div>
                        <button type="submit">Mostrar</button>
                    </form>
                    <h4>Perímetro: {this.state.per}</h4>
                    <h4>Área: {this.state.area}</h4>
                    <Link to="/">
                        <button>Volver al Menu</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Circulo;