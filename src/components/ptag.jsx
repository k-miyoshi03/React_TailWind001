import React from 'react'

const Ptag = (props) => {
    let text = props.text.split('|').map((item, index) => {
        return (
            <React.Fragment key={index}>
                {item}<br/>
            </React.Fragment>
        );
    });

    return (
        <p className={props.className}>
            {text}
        </p>
    )
}

export default Ptag;