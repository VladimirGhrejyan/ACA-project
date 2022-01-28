import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);

    const signin = (newUser, cb) => {
        setUser( newUser );
        localStorage.id = newUser.id
        cb();
    }

    const signout = (cb) => {
        setUser(null);
        localStorage.clear();
        cb();
    }

    const value = {user, signin, signout}
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}