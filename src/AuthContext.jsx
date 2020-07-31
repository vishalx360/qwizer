import React, { useEffect, useState } from 'react';


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(() => {
        // initial set function 
        // reference to localStorage auth data
        let localAuthState = localStorage.getItem("localAuthState")
        // checks if localAuthState exists
        if (localAuthState) {
            // console.log("loading cached user data")
            return JSON.parse(localAuthState)
        } else {
            return {}
        }
    })
    // effect for updating localAuthState to new currentUser state
    useEffect(() => {
        localStorage.setItem("localAuthState", JSON.stringify(currentUser))
    }, [currentUser])


    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
};