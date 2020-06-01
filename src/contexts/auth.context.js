import React, { createContext, useState } from 'react';
import * as auth from '../services/user.service';

const AuthContextData = {
    user: {},
    loggedIn: false,
    userLogin: () => {},
}

const AuthContext = createContext(AuthContextData);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    async function userLogin (credentials) {
        const resp = await auth.login(credentials);
        setUser(resp.data.user);
        console.log('user', resp);
    }

    return (
        <AuthContext.Provider value={{ user, loggedIn: !!user, userLogin }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;