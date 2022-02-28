import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser'


function countActiveUser(users) {
  console.log("counting active users....");
  return users.filter(user => user.active).length;
}

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
        email: 'tomato@tomatoe.com',
        active: true,
    },
    { 
        id:2,
        username: 'potata',
        email: 'potatata@pottat.com',
        active: false,
    },
    { 
        id:3,
        username: '3333',
        email: '3fdsafdsa3@tomatoe.com',
        active: false,
    },          
  ]);
  
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }

    setUsers(users.concat(user));
    setInputs({
      username:'',
      email:'',
    })
    
    nextId.current +=1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id 
      ? { ...user, active: !user.active } : user
    ));
  };

  const count = useMemo(() => countActiveUser(users), [users]);

  return (
  <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>ACTIVE USER COUNT: {count}</div>
  </>
  )
};

export default App;
