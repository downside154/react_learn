import React, { useState, useRef } from 'react';

function InputSample(){
    const [inputs,setInputs] = useState(
        {
            name: '',
            nickname: '',
        }
    );
    const nameInput = useRef()

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
    
        setInputs({
            ...inputs,
            [name]: value,
        });


        
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname:'',

        });
        nameInput.current.focus();

    };

    return(
        <div>
            <input 
                name='name' 
                 placeholder='NAME' 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />
            <input 
                name='nickname' 
                placeholder='NICKNAME' 
                onChange={onChange} 
                value={nickname} 
            />

            <butto onClick={onReset}>reset</butto>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample