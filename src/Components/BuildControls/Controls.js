import React from 'react'
import Control from './Control'
import Auux from "../../hoc/Auux";


const Controls = (props) => {

    let controls = props.controls.map( (control) => {
        return(
                <Control type = {control.type} add = {props.addClicked} remove = {props.removeClicked}  > </Control>
        )
    });
    return (
        <Auux>
            {controls}
        </Auux>
    );
};

export default Controls;
