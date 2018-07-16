import React from 'react'
import classes from './BurgerIngredient.css';

const BurgerIngredient = (props) => {
    let ingredient = null;
    if (props.type === 'Meat'){
        ingredient = <div className={classes.Meat}> a</div>;
    }
    else if (props.type === 'BreadBottom'){
        ingredient = <div className={classes.BreadBottom}> b </div>;
    }
    else if (props.type === 'BreadTop'){
        ingredient = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}>c </div>
                <div className={classes.Seeds2}> d</div>
            a</div>);
    }
    else if (props.type === 'Cheese'){
        ingredient = <div className={classes.Cheese}>e</div>;
    }
    else if (props.type === 'Salad'){
        ingredient = <div className={classes.Salad}>f</div>;
    }
    else if (props.type === 'Bacon'){
        ingredient = <div className={classes.Bacon}>g</div>;
    }

    return (
        ingredient
    );
}

export default BurgerIngredient;