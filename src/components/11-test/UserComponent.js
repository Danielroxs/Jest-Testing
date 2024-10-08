import React from "react";

const UserComponent = ({ user }) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}

export default UserComponent;