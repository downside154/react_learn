import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser'
import useInputs from './useinputs';


function countActiveUser(users) {
  console.log("counting active users....");
  return users.filter(user => user.active).length;
}


const initialState = {
  users: [
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
  }
]
}

function reducer(state, action) {
  switch (action.type){
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return{
        ...state, 
        users: state.users.map(user => 
          user.id === action.id 
          ? { ...user, active: !user.active }
          : user
          )
      };
      case 'REMOVE_USER':
        return {
          ... state, 
          users: state.users.filter(user => 
            user.id !== action.id)
        }
    default:
      throw new Error('Unhandled action');
  }
}

function App() {
  const nextId = useRef(4);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  })
  const { username, email } = form

  
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUser(users), [users])

  return (
  <div>
    <CreateUser 
      username={username} 
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList 
      users={users}
      onToggle={onToggle}
      onRemove={onRemove} 
    />
    <div>ACTIVE USER COUNT: {count}</div>
  </div>
  )
};

export default App;
