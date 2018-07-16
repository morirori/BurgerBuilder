import React from 'react'

const Control = (props) => {
    return(
        <div>
            <p> Ingredient {props.type}
                <button onClick={() => props.add(props.type)}   >  Add  </button>
                <button onClick={() => props.remove(props.type)}   > Remove  </button>
            </p>
        </div>
    );

};

export default Control;
