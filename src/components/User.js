import React, { Fragment } from "react";

export default function User(props){
    const user = props.data;
    return <Fragment>
        <img src={user.picture.thumbnail} alt=""/>
        <p>{user.name.first+" "+user.dob.age+" "+user.location.country+ " "+user.gender}
        </p>
    </Fragment>
}

