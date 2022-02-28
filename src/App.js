import React, { useRef, useState, useMemo, useCallback } from 'react';
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

  const onChange = useCallback(e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, [inputs]);
  
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

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //setUser[...users,user]
    setUsers(users.concat(user));
    setInputs({
      username:'',
      email:'',
    });
    nextId.current +=1;
  }, [username, email, users]);
        

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id 
      ? { ...user, active: !user.active } : user
    ));
  }, [users]);

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
