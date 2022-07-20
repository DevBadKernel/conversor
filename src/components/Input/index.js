import React from "react";
import "./style.css";

const InputDatos = ({origen, conversion}) => {
    const handleChange = (event) => {
        conversion(event.target.value);
    }

    var textOrigen = origen ? "€" : "Pelas";

    return (
        <div id="inputContainer">
            <div>{textOrigen}</div>
            <input type="text" onChange={handleChange}></input>
        </div>
    )
}

export default InputDatos;