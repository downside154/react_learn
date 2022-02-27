import React from "react";



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
            <div>
                <b>{users[0].username}</b>
                <span>{users[0].email}</span>
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>{users[1].email}</span>
            </div>
            <div>
                <b>{users[2].username}</b>
                <span>{users[2].email}</span>
            </div>
        </div>
    )
}
export default UserList