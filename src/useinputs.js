import { useCallback, useState, useReducer } from "react";

// Exercise: change useState into useReducer 
// function reducer(state, action) {
//     change 
//     reset 
// }

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form=>({ ...form, [name]: value }));
    }, [])
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange,reset];
};

export default useInputs;