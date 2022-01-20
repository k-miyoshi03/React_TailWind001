import React from 'react'

const Atag = (props) => {
    return (
        <a className={props.className} href={props.link}>{props.text}</a>
    )
};

export default Atag;