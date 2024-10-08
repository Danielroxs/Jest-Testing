// withAuth.js
import React from 'react';
import useAuth from './UseAuth';

const withAuth = (Component) => {
    return function AuthComponent(props) {
        const { user } = useAuth();
        return <Component {...props} user={user} />;
    };
};

export default withAuth;
