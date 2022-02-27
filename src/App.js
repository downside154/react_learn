import React, { useRef } from 'react';
import UserList from './UserList'

function App() {
  const users = [
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
  ];
  
  //useRef can be used to store variables regardless of components being re rendered
  
  const nextId = useRef(4);
  const onCreate = () =>{
    console.log(nextId.current); //4
    nextId.current +=1;
  };

  return (
    <UserList users={users} />

  )
};

export default App;
