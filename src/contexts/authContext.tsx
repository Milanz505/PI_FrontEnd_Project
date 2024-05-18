"use client"

import { Children, createContext, use, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import api from "@/lib/api";
import logarUsuario from "@/services/APIs/userAuthentication";
import jwt from 'jsonwebtoken';

type UserData = {
  confirmarSenha: string;
  email: string;
  id: string;
  nome: string;
  senha: string;
};

type SignInData = {
    email: string,
    password: string
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserData | undefined;
    signIn: (data: SignInData) => void;
}

function signInRequest(data:SignInData) {
    return {
        token: 'abdc',
        user: {
            name: 'calavo',
            email: 'macaco@email.com',
            avatar_url: ''
        }
    }
}

export const AuthContext = createContext({} as AuthContextType)

const AuthProvider = ({ children }:any) => {
    const [user, setUser] = useState<UserData>()
    
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        if (token){
        // const decodedToken = jwt.verify(token, secret, { complete: true });
        }
    }, [])

    async function signIn({email, password}: SignInData) {
        const response = await logarUsuario (
            email,
            password,
        )
        const {token, user} = response.data
        
        setCookie(undefined, 'nextauth.token', token, {
            maxAge: 60*60*1, //1 hour
        })
        
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        
        setUser(user)
        
    }

    return (
        <AuthContext.Provider value={{user, signIn, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider