import React, {Component} from "react";
import '../assets/css/Vistas.css';
import {Link} from "react-router-dom";
import {url} from "../global";

class Triangulo extends Component {
    state = {
        ladoa: "",
        ladob: "",
        ladoc: "",
        per: "",
        area: ""
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado")
        let data = {ladoa: this.state.ladoa,ladob: this.state.ladob, ladoc: this.state.ladoc}
        fetch(url + "/triangulo", {
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
                            response: json.response
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
                    <h1>Triángulo</h1>
                    <p>Ingrese los lados para conocer el área y el perímetro del triángulo</p>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Lado a: </label>
                            <input name="ladoa" onChange={this.handleChange} value={this.state.ladoa} type="number" min={0}/>
                        </div>
                        <div>
                            <label>Lado b: </label>
                            <input name="ladob" onChange={this.handleChange} value={this.state.ladob}  type="number" min={0}/>
                        </div>
                        <div>
                            <label>Lado c: </label>
                            <input name="ladoc" onChange={this.handleChange} value={this.state.ladoc}  type="number" min={0}/>
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

export default Triangulo;