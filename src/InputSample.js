import React, { useState } from 'react';

function InputSample(){
    const [inputs,setInputs] = useState(
        {
            name: '',
            nickname: '',
        }
    );
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
    
        // setInputs({
        //     ...inputs,
        //     [name]: value,
        // });

        // these codes do not respect immutability
        // React will not detect changes in the object and will thus not render  
        inputs[name] = value;
        setInputs(inputs);

        
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname:'',

        });

    };

    return(
        <div>
            <input name='name' placeholder='NAME' onChange={onChange} value={name} />
            <input name='nickname' placeholder='NICKNAME' onChange={onChange} value={nickname} />

            <butto onClick={onReset}>reset</butto>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample