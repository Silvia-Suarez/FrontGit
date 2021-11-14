import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";
import {url} from "../global";

class Rectangulo extends Component {
    state = {
        base: "",
        altura: "",
        per: "",
        area: ""
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado")
        let data = {base: this.state.base, altura: this.state.altura}
        fetch(url + "/rectangulo", {
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
                    <h1>Rectángulo</h1>
                    <p>Ingrese la base y la altura para conocer el área y el perímetro del rectángulo</p>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Base: </label>
                            <input name="base" onChange={this.handleChange} value={this.state.base} type="number" min={0} placeholder={"Base del rectangulo"}/>
                        </div>

                        <div>
                            <label>Altura: </label>
                            <input name="altura" onChange={this.handleChange} value={this.state.altura} type="number" min={0}placeholder={"Altura del rectangulo"}/>
                        </div>
                        <button type="submit">Mostrar</button>
                    </form>
                    <h4>Perímetro:{this.state.per}</h4>
                    <h4>Área: {this.state.area}</h4>
                    <Link to="/">
                        <button>Volver al Menu</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Rectangulo;