import React from 'react'

const Div = (props) => {
    let texts;
    for(let i = 0; i < props.text.length; ++i) {
        texts += props.text[i];
    }
    return (
        <div className={props.className}>
            {texts}
        </div>
    )
};

export default Div