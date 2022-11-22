import React, { createContext, useState, ReactNode } from 'react'

const backendUrl = "http://localhost:5001"

type user = {name: string, email?: string}

export type AuthContextValue = {
    user: user | null 
    register: (email: string, password: string, name: string) => Promise<{ success: boolean, error: string }>
    login: (email: string, password: string) => Promise<{ success: boolean, error: string }>
}
const initialAuth: AuthContextValue = {
    user: null,
    register: () => { throw new Error('register not implemented.'); },
    login: () => { throw new Error('login not implemented.'); }
  }

export const AuthContext = createContext<AuthContextValue>(initialAuth)

export const AuthContextProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<user | null>(initialAuth.user)


const register = async (email: string, password: string, nameForm: string) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name: nameForm })
    }
    const res = await fetch(`${backendUrl}/signup`, options);
    const { success, error, jwt, name } = await res.json()
    localStorage.setItem("jwt", jwt)
    setUser({ ...user, name })
    return { success, error }
  }
  const login = async (email: string, password: string) => {
    console.log("email", email);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(`${backendUrl}/login`, options);
    const { success, token, error, name } = await res.json();
    localStorage.setItem("jwt", token);
    setUser({ ...user, name });
    return { success, error };
  };
  return (
  <AuthContext.Provider value={{ user, register, login}}>
    {children}
  </AuthContext.Provider>
  )
  
};