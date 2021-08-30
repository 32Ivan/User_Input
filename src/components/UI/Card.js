import React from 'react';

import clas from './Card.module.css';

const Card = (props) =>{

    return(
        <div className={`${clas.card} ${props.className}`} >{props.children}</div>
    );
}

export default Card;
