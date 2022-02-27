import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
    
    const { username, email, id, active} = user;

    // Using useEffect to Mount and Unmout
    useEffect(() => {
        //Mount
        console.log('component on screen');
        // props -> state
        // REST API
        // libraries D3 Video.js
        // setInterval, setTimeout
        return () => {
            //Unmount
            // clear clearInterval, clearTimeout
            // get rid of library instance
            console.log('component dissappeared');
        }
    }, []);
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={()=>onToggle(id)}
            >{username}</b>
            &nbsp;
            <span>{email}</span>
            <button onClick={() => onRemove(id)}>REMOVE</button>
        </div>
    )
}


function UserList({ users, onRemove, onToggle }){

    return(
        <div>

            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove} 
                            onToggle={onToggle}
                            />
                    )
                )
            }
        </div>
    )
}
export default UserList