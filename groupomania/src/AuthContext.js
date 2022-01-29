import React, { createContext, useEffect, useState } from "react";


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const AuthContext = createContext({})

const AuthProvider = props => {

    const [loggedIn, setLoggedIn] = useState(false)
    // useEffect(() => {
    //     // pull data from ls
    // }, [])

    const login = () => {
    sleep(2000).then(() => setLoggedIn(true))

    }

    const logout = () => {
    sleep(2000).then(() => setLoggedIn(false))
    }


    const authContextValue = {
        login,
        loggedIn,
        logout
    }

    return <AuthContext.Provider value={authContextValue} {...props} />
}
const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }