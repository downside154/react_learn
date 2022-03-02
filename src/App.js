import React, { useRef, useState, useMemo, useCallback, useReducer, createContext } from 'react';
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

export const UserDispatch = createContext(null);

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

  const count = useMemo(() => countActiveUser(users), [users])

  return (
  <UserDispatch.Provider value={dispatch}>
    <CreateUser 
      username={username} 
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList 
      users={users}

    />
    <div>ACTIVE USER COUNT: {count}</div>
  </UserDispatch.Provider>
  )
};

export default App;



// use of immer library to mutate immutable objects 
// and respect react's rule of immutability


// React used to use class based componenets because it lacked hooks before, 
// nowadays functional programming is much more recommended

// 1. when class functions are assigned to an event, "this" becomes disconnected so use the constructor to bind this to whatever you wanted it to point
// 2. custom method using arrow functions. create a constructor with reference to this pointing to an object (not literals).... change everything to dynamic (technically class properties Babel too)
// 3. class properties grammar using Babel : 


state = {
  counter: 0,
  fixed: 1,
}

handleIncrease= () => {
  this.state(state => ({
    counter: state.counter + 1
  }));

}





