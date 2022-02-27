import React, { useRef, useState } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '', 
  });
  
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  
  const [users, setUsers] = useState([
    { 
        id:1,
        username: 'tomato',
        email: 'tomato@tomatoe.com'
    },
    { 
        id:2,
        username: 'potata',
        email: 'potatata@pottat.com'
    },
    { 
        id:3,
        username: '3333',
        email: '3fdsafdsa3@tomatoe.com'
    },          
  ]);
  
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers([...users, user]);
    setInputs({
      username:'',
      email:'',
    })
    console.log(nextId.current); //4
    nextId.current +=1;
  };

  return (
  <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} />
  </>
  )
};

export default App;
