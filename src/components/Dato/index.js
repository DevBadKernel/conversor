import React from "react";
import "./style.css";

const ResulDatos = ({origen, result}) => {

    var textOrigen = origen ? "Pelas" : "€";

    return (
        <div id="datoContainer">
            <div>{textOrigen}</div>
            <div id="resultado">{result}</div>
        </div>
    )
}

export default ResulDatos;