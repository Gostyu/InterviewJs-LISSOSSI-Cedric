import React from "react";
import User from "./User";
export default function UserList({list}){
    const allUsers = list.map((user,index)=>{
    return  <li key={index} style={{width:0}}><User key={index} data={user}></User></li>
    });
   return <ul>
       {allUsers}
    </ul>
}
