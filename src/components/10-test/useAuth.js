import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const userData = {
            name: 'John Doe',
            isAuthenticated: true
        }
        setUser(userData);
    }, []);
    return { user };
}

export default useAuth;