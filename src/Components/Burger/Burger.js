import React from 'react'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.css';

const Burger = (props) => {

    let burger = props.ingredients.map( (layer) => {
        return(
            <div >
                <BurgerIngredient type={layer.type} />
            </div>
        );
    });

    return (
        <div className={classes.Burger}>{burger} </div>
    );
};


export default Burger;
