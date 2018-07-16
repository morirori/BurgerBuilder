import React, {Component} from 'react';

import Auux from '../../../hoc/Auux';
import Burger from "../../Burger/Burger";
import Controls from "../../BuildControls/Controls";

class BurgerBuilder extends Component{

    state = {
        burger : [
            {layer:0,type:'BreadTop'},
            {layer:1,type:'BreadBottom'},
        ],
        controls : [
            {type:"Meat", add:false, remove:false},
            {type:"Cheese", add:false, remove:false},
            {type:"Salad", add:false, remove:false},
            {type:"Bacon", add:false, remove:false},
        ]
    };
    removeIngredientEventHandler = (ingredient) => {
        this.removeIngredient(ingredient);
    };

    removeIngredient = (type) =>{
        let burger = [...this.state.burger];
        let x;
        for (x in burger) {
           if (burger[x].type === type){
               burger.splice(x,1);
            }
        }
        this.setState({burger:burger});
    };

    addIngredientEventHandler = (ingredient) => {
        this.addIngredient(ingredient);
    };

    addIngredient = (type) => {
        let layerBelowTopIndex = 1;
        let BreadTopIndex=0;

        let length = this.state.burger.length;
        let temp= {layer:length-1,type:type};
        let burger = [...this.state.burger];

        burger.splice(layerBelowTopIndex,0,temp);
        burger[BreadTopIndex].layer=length;
        this.setState({burger:burger});
    }

    render(){
        return(
            <Auux>
                <Burger ingredients = {this.state.burger}/>
                <Controls controls ={this.state.controls} addClicked = {this.addIngredientEventHandler} removeClicked = {this.removeIngredientEventHandler} />
            </Auux>

        );
    }
}
export default BurgerBuilder;