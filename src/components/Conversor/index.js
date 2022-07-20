import React, {Component} from 'react'
import './style.css';
import InputDatos from "../Input"
import ResulDatos from "../Dato"

export default class conversor extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
            result:'',
            origen:true
        }
    }
    
    conversion = (newValue) => {
    if(!isNaN(Number(newValue))){
        if(this.state.origen){
            var resultado = newValue * 166.386;
            this.setState({value:newValue, result:resultado.toFixed(2)})
        }else{
            var resultado = newValue / 166.386;
            this.setState({value:newValue, result:resultado.toFixed(2)})
        }}
    }

    handleClick = () => {
        this.setState({origen:!this.state.origen, value:"", result:""})
    }

    render() {
        return (
            <div id="conversor">
                <h1>Conversor monedas</h1>
                <div class='separador'></div>
                <div id='datos'>
                    <InputDatos value={this.state.value} conversion={this.conversion} origen={this.state.origen}/>
                    <button onClick={this.handleClick}>{this.state.origen ? "€ => pelas" : "Pelas => €"}</button>
                    <ResulDatos result={this.state.result} origen={this.state.origen}/>
                </div>                
            </div>
        )
    }
}
