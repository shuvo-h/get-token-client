import React, { createContext } from 'react';
import useAuthAccess from '../hooks/useAuthAccess';

type providerPropType = {
    children:JSX.Element
}


const   initialCtcValue  = {
    user: {
        status: "idle",
        user: {
            email: "",
            mobile: "",
            name: "",
            role: ""
        },
        error: "" 
    }
}

export const AuthContext = createContext<any>(initialCtcValue);  // give proper context type

const AuthProvider  = ({children}:providerPropType) => {
    const allContext = useAuthAccess();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;