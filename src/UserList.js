import React from "react";

function User({ user }) {
    return (
        <div>
        <b>{user.username}</b>
        <span>{user.email}</span>
        </div>
    )
}


function UserList(){
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
    return(
        <div>
            {/* wanted output is: 
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}
            {
                users.map(
                    user=>(<User user={user} key={user.id} />)
                    )
            }
        </div>
    )
}
export default UserList