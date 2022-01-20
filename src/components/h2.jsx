import React from 'react'

const H2 = (props) => {
    return (
        <h2 id={props.id} className={props.className}>{props.text}</h2>
    )
};

export default H2;