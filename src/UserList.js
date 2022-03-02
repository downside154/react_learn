import React, { useEffect, useContext } from "react";

const User = React.memo(function User({ user }) {
    
    const { username, email, id, active} = user;

    // Using useEffect to Mount and Unmout
    useEffect(() => {
        console.log('after');
        console.log(user);
        return () => {
            console.log('before');
            console.log(user);
        }
    }, [user]);

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={()=>dispatch({
                type: 'TOGGLE_ID',
                id
            })}
            >{username}</b>
            &nbsp;
            <span>{email}</span>
            <button onClick={() => dispatch({
                type: 'REMOVE_ID',
                id
            })}>REMOVE</button>
        </div>
    )
})


function UserList({ users }){

    return(
        <div>

            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            />
                    )
                )
            }
        </div>
    )
}
export default React.memo(UserList, (prevProps, nextProps) => nextProps.user === prevProps.user );
