"use client"

import { Children, createContext, use, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import logarUsuario from "@/services/APIs/userAuthentication";
import api from "@/lib/api";
import jwt from 'jsonwebtoken'
import UserProfile from "@/services/APIs/userProfile";
import { destroySession, fetchMe } from "./authFunctions";


type SignInData = {
    email: string,
    password: string
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: any;
    signIn: (data: SignInData) => void;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType)


const AuthProvider = ({ children }:any) => {
    const [user, setUser] = useState()
    const isAuthenticated = !!user;

    useEffect(() => {
        const isUserLoggedIn = async () => {
            const userInfo = await fetchMe();
            setUser(userInfo)   
        }
        isUserLoggedIn();
        // const { 'token': token } = parseCookies()
        // if (token){
        //     const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_AUTH_SECRET as string ,{complete: true});
        //     console.log('decodedToken', decodedToken)
        //     // UserRequest(token).then((user) => {
        //     // setUser(user)
        //     // })
        //     // setUser(user)
        //     // const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_AUTH_SECRET ,{complete: true});
        //     } 
    }, [])

    async function signIn({email, password}: SignInData) {
        const response = await logarUsuario (
            email,
            password,
        )
        const {token, user} = response.data

        setCookie(undefined, 'token', token, {
            maxAge: 60*60*1, //1 hour
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser(user)

    }

    const signOut = async () => {
        await destroySession()
        setUser(undefined)
    }

    return (
        <AuthContext.Provider value={{user, signIn, isAuthenticated, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider