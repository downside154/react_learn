import React, { useState } from 'react';

function InputSample(){
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };
    const onReset = () => {
        setText('');
    };

    return(
        <div>
            <input onChange={onChange} value={text} />
            <butto onClick={onReset}>reset</butto>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample