import React from 'react'
import Atag from './atag'

const Li = (props) => {
    return (
        <li className={props.className}>
            <Atag link={props.link} text={props.text} />
        </li>
    )
};

export default Li;