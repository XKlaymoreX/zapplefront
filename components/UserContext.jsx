import React, {createContext, useState} from 'react'
import commerce from '../lib/commerce'

export const AuthContext = createContext()

export const UserContext = (props) => {
    const [user,setUser] = useState({})

    const getCurrentUser =  () => {
        console.log(commerce.customer.isLoggedIn())
    }
    const setCurrentUser =  () => {

    }
    const sendEmailToken =  (email) => { 
        console.log('Logging...' + email)
        commerce.customer.login(email, 'http://localhost:3000/Auth/Callback/{token}').then((token) => console.log(token))
    }

    return (
            <AuthContext.Provider value={
                    {
                        sendEmailToken,
                        getCurrentUser,
                        setCurrentUser
                    }
            } >
                {props.children}
            </AuthContext.Provider>
    )
}

