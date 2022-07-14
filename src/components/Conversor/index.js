import React, {Component} from 'react'
import './style.css';
import InputDatos from '../Input'
import ResulDatos from "../Dato";

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:'',
            result:'',
            origen:true
        }
    }

conversion = (newValue) => {
    if(this.state.origen){
        var resultado = newValue * 166.386;
        this.setState({value:newValue, result:resultado})
    }else{
        var resultado = newValue / 166.386;
        this.setState({value:newValue, result:resultado})
    }
}

    render() {
        return (
            <div id="conversor">
                <h1>Conversor monedas</h1>
                <div class='separador'></div>
                <div id='datos'>
                    <InputDatos />
                    <div class='separadorVertical'></div>
                    <ResulDatos />
                </div>                
            </div>
        )
    }
}
